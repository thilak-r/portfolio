import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:thilak22005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setFormData({ name: '', email: '', message: '' }); setIsSubmitting(false); }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'thilak22005@gmail.com', href: 'mailto:thilak22005@gmail.com' },
    { icon: Phone, label: '+91 9353705867', href: 'tel:+919353705867' },
    { icon: MapPin, label: 'Mysore, Karnataka, India', href: undefined },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/thilak-r' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/thilakramalkar' },
  ];

  const inputStyle = (name: string) => ({
    backgroundColor: 'var(--color-bg-elevated)',
    border: `1px solid ${focused === name ? 'var(--color-accent)' : 'var(--color-border)'}`,
    color: 'var(--color-text-primary)',
  });

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Let's work together</h2>
          <p className="text-base mb-4" style={{ color: 'var(--color-text-muted)' }}>Have a project in mind? I'd love to hear about it.</p>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                    <Icon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm transition-colors" style={{ color: 'var(--color-text-secondary)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                    >{label}</a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: 'var(--color-text-muted)' }}>Find me on</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
                    style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border-hover)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email'].map((field) => (
                <div key={field} className="relative">
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    placeholder={`Your ${field}`}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-all duration-200"
                    style={inputStyle(field)}
                  />
                </div>
              ))}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-all duration-200 resize-none"
                  style={inputStyle('message')}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-50"
                style={{ backgroundColor: 'var(--color-accent)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Opening email...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}