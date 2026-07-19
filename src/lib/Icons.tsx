import {
  SiReact, SiVuedotjs, SiJavascript, SiHtml5, SiCss, SiSass,
  SiTailwindcss, SiNodedotjs, SiPython, SiPhp, SiMysql, SiFirebase,
  SiPostgresql, SiLaravel, SiFigma, SiGit, SiVercel, SiVite, 
  SiTypescript, SiCplusplus, SiNextdotjs
} from "react-icons/si";

export const Icons: Record<string, React.ReactNode> = {
  React: <SiReact className="text-sky-400" />,
  Vue: <SiVuedotjs className="text-emerald-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  CSS: <SiCss className="text-blue-400" />,
  SCSS: <SiSass className="text-pink-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Python: <SiPython className="text-yellow-300" />,
  PHP: <SiPhp className="text-indigo-300" />,
  MySQL: <SiMysql className="text-blue-300" />,
  Firebase: <SiFirebase className="text-amber-400" />,
  PostgreSQL: <SiPostgresql className="text-sky-300" />,
  Laravel: <SiLaravel className="text-red-400" />,
  Figma: <SiFigma className="text-red-400" />,
  Git: <SiGit className="text-orange-400" />,
  Vercel: <SiVercel className="text-white" />,
  Vite: <SiVite className="text-purple-400" />,
};