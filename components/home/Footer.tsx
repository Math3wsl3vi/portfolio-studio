import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-24 py-24 font-sans h-screen">
      <div className="mx-auto flex flex-col md:flex-row justify-between gap-16 h-full">
        {/* Left side text */}
        <div className="space-y-6 md:w-3/5 h-full flex justify-between flex-col">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#b8a48c]">
              Let’s start the conversation
            </p>

            <h2 className="text-[2.5rem] md:text-[4.5rem] leading-[1.1] font-extrabold uppercase">
              Design isn’t just creation, it’s communion.  
              It’s the silent dialogue between vision and the one bold enough to shape it.
            </h2>

          </div>

          {/* Footer small links + social icons */}
          <div className="pt-24 space-y-6">
            <ul className="flex flex-wrap gap-4 text-xs text-[#9d8a76] uppercase">
              <li className="hover:underline cursor-pointer">Terms</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
            </ul>

            <div className="flex items-center gap-5">
              {/* Social icons */}
              <a
                href="https://github.com/Math3wsl3vi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9d8a76] hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/levi-mathews-math3wsl3vi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9d8a76] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <p className="text-xs text-[#9d8a76]">
              © 2025 Levi Kulei Mathews
            </p>
          </div>
        </div>

        {/* Right side contact section */}
        <div className="flex flex-col justify-end md:w-2/5 space-y-8">
          <p className="text-sm leading-relaxed text-[#d8c4a9]">
            I partner with those who value thoughtful, intentional work that
            speaks with purpose. If you’re ready to be heard, I’m ready to
            listen.
          </p>

          <div className="border-t border-[#b8a48c] pt-6 space-y-4">
            <a
              href="mailto:levimathews9841@gmail.com"
              className="block text-sm font-mono tracking-widest uppercase hover:underline"
            >
              Send me an Email
            </a>
            <a
              href="#"
              className="block text-sm font-mono tracking-widest uppercase hover:underline"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
