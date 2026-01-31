import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export function Contact() {
  // 🔄 CONVERT: Form state management
  // HTML/JS: let formData = {name: '', email: '', message: ''};
  // OR: Just get form values on submit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 🔄 CONVERT: Form submission handler
  // HTML: function handleSubmit(e) { e.preventDefault(); ... }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  // 🔄 CONVERT: Input change handler
  // HTML/JS: Not needed if you get form values on submit
  // document.getElementById('name').value gives you the current value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔄 CONVERT: Data arrays - Keep these in JavaScript!
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'alex.rivera@email.com',
      link: 'mailto:alex.rivera@email.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      username: '@alexrivera',
      link: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      username: 'Alex Rivera',
      link: 'https://linkedin.com',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      username: 'alex.rivera@email.com',
      link: 'mailto:alex.rivera@email.com',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl">Get In Touch</h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
              <h2 className="text-2xl mb-6">Send Me a Message</h2>
              
              {/* 🔄 CONVERT: Form with onSubmit */}
              {/* HTML: <form onsubmit="return handleSubmit(event);"> */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 🔄 CONVERT: Controlled inputs */}
                {/* React: value={formData.name} onChange={handleChange} */}
                {/* HTML: Just <input type="text" id="name" name="name"> */}
                {/* Get value on submit: document.getElementById('name').value */}
                <div>
                  <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
              <h2 className="text-2xl mb-6">Contact Information</h2>
              
              {/* 🔄 CONVERT: Array mapping */}
              {/* HTML: Write manually or use forEach */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 mb-1">{info.label}</div>
                      {/* 🔄 CONVERT: Conditional rendering */}
                      {/* HTML/JS: if (info.link) { create <a> } else { create <div> } */}
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-zinc-200 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-zinc-200">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
              <h2 className="text-2xl mb-6">Connect With Me</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400">{social.label}</div>
                      <div className="text-zinc-200">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
              <h3 className="text-xl mb-3">Availability</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Currently available for freelance projects and internship opportunities. 
                I typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}