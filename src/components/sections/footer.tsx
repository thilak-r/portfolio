import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">© 2025 Thilak R. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/thilak-r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/thilak120/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:thilak22005@gmail.com"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}