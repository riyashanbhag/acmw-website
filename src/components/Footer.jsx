import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full mt-20 border-t border-white/10"
      style={{ background: 'rgba(3, 0, 20, 0.8)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
              ACM-W <span className="text-[#2B609E]">Manipal</span>
            </h2>
            <p className="text-gray-400 text-xs font-medium">
              Empowering Women in Tech
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-3 items-center text-center">
            <h3 className="text-white font-bold uppercase text-[13px] tracking-[0.3em]">
              Focus Areas
            </h3>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <div className="flex gap-4">
                <span>Technical Workshops</span>
                <span className="text-[#2B609E]">●</span>
                <span>Speaker Sessions</span>
              </div>

              <div className="flex gap-4">
                <span>Hackathons & Competitions</span>
                <span className="text-[#2B609E]">●</span>
                <span>Mentorship & Community</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col md:items-end gap-3 text-gray-300">
            <div className="flex gap-6 items-center">
              <a
                href="https://www.instagram.com/acmwmanipal"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2B609E] flex items-center gap-2"
              >
                <Instagram size={18} />
                <span className="text-xs font-bold uppercase">Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/company/acm-w-manipal/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2B609E] flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span className="text-xs font-bold uppercase">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-2 opacity-80">
              <Mail size={18} className="text-[#2B609E]" />
              <a
                href="mailto:acmw.manipal@gmail.com"
                className="text-gray-400 text-sm"
              >
                acmw.manipal@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-400 text-[10px] uppercase tracking-[0.4em]">
          © 2026 ACM-W Manipal Chapter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}