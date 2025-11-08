import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto URL with form data
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:thilak22005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Show success toast
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete the process.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div   style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something Together</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="rounded-lg group-hover:bg-[#00D9FF]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <a
                    href="mailto:thilak22005@gmail.com"
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-lg"
                  >
                    thilak22005@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className=" rounded-lg group-hover:bg-[#00D9FF]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <a
                    href="tel:+919353705867"
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-lg"
                  >
                    +91 9353705867
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className=" rounded-lg group-hover:bg-[#00D9FF]/20 transition-colors">
                    <MapPin className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <span className="text-gray-300 text-lg">Mysore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/thilak-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  GitHub
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://linkedin.com/in/thilak120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://thilak-r.github.io/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-[#1a1a1a] border-[#2a2a2a] rounded-xl hover:border-[#00D9FF] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white placeholder:text-gray-500 rounded-lg focus:border-[#00D9FF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white placeholder:text-gray-500 rounded-lg focus:border-[#00D9FF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white placeholder:text-gray-500 min-h-[150px] rounded-lg focus:border-[#00D9FF] transition-colors resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold rounded-lg py-6 transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}