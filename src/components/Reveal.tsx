"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Direction the element floats in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay in ms before the animation starts, once visible */
  delay?: number;
  /** Distance (px) to travel */
  distance?: number;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 40,
  duration = 700,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offset =
    direction === "up"
      ? `translateY(${distance}px)`
      : direction === "down"
      ? `translateY(-${distance}px)`
      : direction === "left"
      ? `translateX(${distance}px)`
      : direction === "right"
      ? `translateX(-${distance}px)`
      : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : offset,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}