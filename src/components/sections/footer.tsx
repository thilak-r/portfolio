import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Thilak R</h3>
            <p className="text-gray-400 text-sm">
              Computer Science and AI Student passionate about building innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-purple-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mysore, India</li>
              <li>+91 9353705867</li>
              <li>thilak220005@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/thilak-r" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/thilak120/" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:thilak22005@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Thilak R. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}