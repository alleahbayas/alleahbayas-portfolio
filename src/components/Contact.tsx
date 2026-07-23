"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { Mail, MapPin, FileText, Download, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: ""});

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <section 
      id="contact" 
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 tp:px-6 tp:py-12 sl:px-8 sl:py-10 ml:px-6 ml:py-6 max-w-7xl mx-auto scroll-mt-14">

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
            <a href="#" className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <FaGithub size={16} /> GitHub
            </a>

            <a href="#" className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <FaInstagram size={16} /> Instagram
            </a>

            <a href="#" className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-7.5 py-2.5 text-sm text-foreground transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <FaLinkedin size={16} /> Linkedin
            </a>

            <a
              href="/Alleah_Bayas_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[450px] mt-4 items-center gap-3 rounded-2xl bg-gradient-to-r from-[#A07172] via-[#FF9F9E] to-[#FF5C6E] px-3 py-2 text-white transition hover:opacity-90"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/10">
                <FileText size={20} />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <p className="text-[16px] font-semibold">Download PDF</p>
                <p className="font-mono text-[11px] text-[#E2E2E2] truncate">
                  Alleah_Bayas_CV.pdf
                </p>
              </div>

              <Download size={20} className="shrink-0" />
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
 
          <div className="flex md:justify-center">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 rounded-full border border-[#FF5C6E] px-6 py-3 text-sm text-foreground dark:text-white transition hover:bg-[#FF5C6E] hover:text-white"
            >
              Send Message <Send className="text-[#FF5C6E] hover:text-white" size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}