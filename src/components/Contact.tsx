"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, FileText, Download, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// ⬇️ Replace these with the values from your EmailJS dashboard (Account > API Keys, Email Services, Email Templates)
const EMAILJS_SERVICE_ID = "service_cmz1vhj";
const EMAILJS_TEMPLATE_ID = "template_32uqtwl";
const EMAILJS_PUBLIC_KEY = "sGAdiYqnEtJeNkMTa";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: ""});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      // Reset the success state after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section 
      id="contact" 
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 tp:px-6 tp:py-12 sl:px-8 sl:py-10 ml:px-6 ml:py-6 max-w-7xl mx-auto scroll-mt-[var(--nav-h)]">

      <p className="font-mono text-xs text-[#C2185B] dark:text-[#FFA1A3]">
        GET IN TOUCH</p>

      <h1 className="mt-4 font-inter font-medium text-foreground text-4xl">
        Let's make it {" "} 
        <span className="bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">
          happen
        </span>
      </h1>

      <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 sl:grid-cols-2 sl:gap-8 ml:gap-6">
          <div>
          <p className="font-inter text-neutral-600 dark:text-[#9F9F9F]">
            Currently seeking opportunities to grow, contribute, and build impactful software. 
            If you'd like to collaborate or discuss a project, send me a message — 
            I typically respond within 24 hours.
          </p>
          
          <div className="mt-8 mb-6 w-full max-w-md mx-auto rounded-2xl border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 p-4">
            <p className="mb-3 text-s font-mono font-semibold tracking-widest text-[#FB0945]">DIRECT</p>

            {/* EMAIL */}
            <div className="mb-3 flex items-center gap-3 border-b border-black/10 dark:border-neutral-800 pb-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-300/20 text-rose-700 dark:text-rose-200">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-widest text-[#555454]">EMAIL</p>
                <p className="mt-0.5 text-sm font-inter font-medium truncate text-foreground">alleahmariegb@gmail.com</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-300/20 text-rose-700 dark:text-rose-200">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[#555454]">LOCATION</p>
                <p className="mt-0.5 text-sm font-inter font-medium text-foreground">Cavite, Philippines</p>
              </div>
            </div>
          </div>
        
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            {/* GITHUB */}
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition-colors duration-300 hover:text-white hover:border-transparent"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#FF5C6E] transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <FaGithub size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">GitHub</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition-colors duration-300 hover:text-white hover:border-transparent"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#FF5C6E] transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <FaInstagram size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">Instagram</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition-colors duration-300 hover:text-white hover:border-transparent"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#FF5C6E] transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <FaLinkedin size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">Linkedin</span>
            </a>

            {/* DOWNLOAD CV - color slide via animated gradient position */}
            <a
              href="/AlleahBayas_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[450px] mt-4 items-center gap-3 rounded-2xl bg-gradient-to-r from-[#A07172] via-[#FF9F9E] to-[#FF5C6E] bg-[length:200%_100%] bg-left px-3 py-2 text-white transition-[background-position,transform] duration-500 ease-out hover:bg-right hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/10 transition-transform duration-300 group-hover:rotate-6">
                <FileText size={20} />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <p className="text-[16px] font-semibold">Download PDF</p>
                <p className="font-mono text-[11px] text-[#E2E2E2] truncate">
                  Alleah_Bayas_CV.pdf
                </p>
              </div>

              <Download size={20} className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div>
          <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-4 block font-mono text-[#B8703E] dark:text-[#FFE3CD] text-xs tracking-widest">
                NAME
              </label>
              <input
                type="text"
                placeholder="Alexander Brown"
                value={form.name}
                onChange={handleChange("name")}
                className="w-full rounded-xl border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-3 text-sm text-foreground placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-rose-400/60 dark:focus:border-rose-300/60 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="mb-4 block text-xs tracking-widest font-mono text-[#B8703E] dark:text-[#FFE3CD]">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="alexanderbrown@email.com"
                value={form.email}
                onChange={handleChange("email")}
                className="w-full rounded-xl border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-3 text-sm text-foreground placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-rose-400/60 dark:focus:border-rose-300/60 focus:outline-none"
              />
            </div>
          </div>

           <label className="mb-4 block text-xs tracking-widest font-mono text-[#B8703E] dark:text-[#FFE3CD]">
                MESSAGE
            </label>
          <textarea
            rows={8}
            placeholder="Tell me a bit about what you have in mind..."
            value={form.message}
            onChange={handleChange("message")}
            className="w-full resize-none rounded-xl border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-3 text-sm text-foreground placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-rose-400/60 dark:focus:border-rose-300/60 focus:outline-none mb-6"
          />
 
          <div className="flex flex-col items-center gap-3 sm:justify-center md:justify-center tp:justify-center sl:justify-center">
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="group flex items-center gap-2 rounded-full border border-[#FF5C6E] px-6 py-3 text-sm text-foreground dark:text-white transition-all duration-300 hover:bg-[#FF5C6E] hover:text-white hover:shadow-lg hover:shadow-[#FF5C6E]/30 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <>
                  Sending <Loader2 className="text-[#FF5C6E] group-hover:text-white animate-spin" size={15} />
                </>
              ) : (
                <>
                  Send Message <Send className="text-[#FF5C6E] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" size={15} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={15} /> Message sent — thanks for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400">
                <XCircle size={15} /> Please fill in all fields and try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}