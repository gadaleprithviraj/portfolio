import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Globe } from 'lucide-react';
import { Linkedin, Github } from './ui/BrandIcons';
import { personal } from '../data/personal';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Banner Header */}
      <section 
        className="relative h-[220px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 38, 30, 0.6), rgba(42, 38, 30, 0.6)), url('https://lh3.googleusercontent.com/sitesv/AG8ngQXV7G8mBq6kqOODbe61tngMgMD8rfn0AHq3Yp0Cy5E16i_SjuVlkU3haBRuMl9Y3RdZ_mJ3EbZmmT8sNvyXTlRQpstbS8Xje03_KXqWn2aTV-LbqYDYuAH8tm695uhuH5uWp_VPE97TPYEbE2H2gLCbZgtQK0oJQvsbMEGekUxsAd3mb0-clf59kWjI=w16383')`
        }}
      >
        <div className="text-center px-4 reveal active">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            Contact Me
          </h1>
          <p className="text-xs sm:text-base font-heading font-medium tracking-widest text-[#cea964] uppercase">
            Get In Touch
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Info & React Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8 max-w-4xl mx-auto">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-4 text-left reveal active">
            <h3 className="text-xl font-heading font-bold text-brand-text-dark mb-4 gold-line gold-line-left">
              Contact Details
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-serif mb-6">
              I'm always interested in discussing data analytics, business intelligence, technology, projects, and new opportunities.
            </p>

            <div className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded shadow-sm">
              <div className="text-brand-gold"><Globe size={18} /></div>
              <div>
                <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted">Location</h4>
                <p className="text-xs font-semibold text-brand-text-dark">{personal.location}</p>
              </div>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded hover:border-brand-gold text-brand-text hover:text-brand-gold transition-all shadow-sm"
            >
              <div className="text-brand-gold"><Mail size={18} /></div>
              <div>
                <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted">Email</h4>
                <p className="text-xs font-semibold text-brand-text-dark">{personal.email}</p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded hover:border-brand-gold text-brand-text hover:text-brand-gold transition-all shadow-sm"
            >
              <div className="text-brand-gold"><Linkedin size={18} /></div>
              <div>
                <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted">LinkedIn</h4>
                <p className="text-xs font-semibold text-brand-text-dark">linkedin.com/in/prithvirajgadale</p>
              </div>
            </a>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded hover:border-brand-gold text-brand-text hover:text-brand-gold transition-all shadow-sm"
            >
              <div className="text-brand-gold"><Github size={18} /></div>
              <div>
                <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted">GitHub</h4>
                <p className="text-xs font-semibold text-brand-text-dark">github.com/gadaleprithviraj</p>
              </div>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 reveal active text-left">
            <div className="gold-card p-6 sm:p-8 bg-white">
              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-base font-bold text-brand-text-dark tracking-tight font-heading">Message Sent Successfully!</h3>
                  <p className="text-xs text-brand-text-muted mt-2 max-w-sm leading-relaxed font-serif">
                    Thank you for reaching out, Prithviraj. I will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-6 px-4 py-2 border border-brand-border text-brand-text-muted hover:text-brand-gold hover:border-brand-gold text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1 font-sans">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 text-xs text-brand-text-dark bg-brand-bg border rounded focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/10' : 'border-brand-border'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1 font-sans">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 text-xs text-brand-text-dark bg-brand-bg border rounded focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/10' : 'border-brand-border'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1 font-sans">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 text-xs text-brand-text-dark bg-brand-bg border rounded focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all resize-none ${
                        errors.message ? 'border-red-400 bg-red-50/10' : 'border-brand-border'
                      }`}
                      placeholder="Write your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-[10px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow active:scale-95"
                  >
                    <Send size={14} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Simulated Contact Disclaimer */}
            <div className="mt-4 flex gap-3 p-4 bg-white border border-brand-border rounded text-[11px] text-brand-text-muted font-sans shadow-sm">
              <AlertCircle size={15} className="text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-brand-text-dark">Developer Note:</span> Currently, this form operates in frontend-only simulation mode. To enable real email submissions, connect a service such as Formspree, EmailJS, or Resend.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
