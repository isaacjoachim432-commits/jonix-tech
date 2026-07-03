import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Mail, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { BIO_DATA } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-reset status after 8 seconds
      setTimeout(() => setSubmitStatus('idle'), 8000);
    }, 1800);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-900">
      {/* Visual glowing accent background blobs */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            05 // CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mt-4">
            Contact <span className="text-red-500 font-display">Me</span>
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mt-4 glow-red" />
        </div>

        {/* Form panel & contact details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch items-start max-w-5xl mx-auto">
          
          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 bento-card glow-red-hover">
              <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2.5">
                <Sparkles size={20} className="text-red-500" />
                Let&apos;s Build Success
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Have an exciting project, custom website requirement, or just want to discuss some elite digital ideas? Feed the console your message and let&apos;s build something beautiful.
              </p>

              {/* Informative Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-900/60 hover:border-red-500/20 transition-all">
                  <div className="p-2.5 bg-red-950/30 rounded-lg text-red-500 border border-red-500/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">INBOX EMAIL</h4>
                    <a href={`mailto:${BIO_DATA.email}`} className="text-sm font-sans font-medium text-white hover:text-red-400 transition-colors mt-0.5 block">
                      {BIO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-900/60 hover:border-red-500/20 transition-all">
                  <div className="p-2.5 bg-red-950/30 rounded-lg text-red-500 border border-red-500/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">LOCATION</h4>
                    <p className="text-sm font-sans font-medium text-white mt-0.5 block">
                      {BIO_DATA.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response stats */}
            <div className="p-6 bento-card glow-red-hover flex items-center justify-between text-zinc-500 font-mono text-[10px] uppercase">
              <span>RESPONSE SPEED</span>
              <span className="text-red-500 font-bold tracking-widest">&lt; 24 HOURS</span>
            </div>
          </div>

          {/* Right panel: React Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bento-card glow-red-hover relative">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle2 size={56} className="text-red-500 mb-6 animate-bounce" />
                    <h3 className="text-2xl font-display font-semibold text-white mb-2">
                      Message Sent, Commander!
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                      Thank you for contacting Jonix Tech! Your details were secure and have been relayed safely. Expect a reply in your inbox shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-5 py-2.5 rounded-lg border border-red-500/30 text-xs font-mono tracking-widest text-zinc-400 hover:text-white hover:border-red-500 hover:glow-red transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex gap-2 items-center text-xs font-mono text-zinc-500 uppercase mb-2 border-b border-zinc-900 pb-3">
                      <MessageSquare size={14} className="text-red-500" />
                      SECURE CONTACT CONSOLE
                    </div>

                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 focus:border-red-500 focus:glow-red focus:outline-hidden text-white font-sans text-sm px-4 py-3.5 rounded-lg transition-all duration-300"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 focus:border-red-500 focus:glow-red focus:outline-hidden text-white font-sans text-sm px-4 py-3.5 rounded-lg transition-all duration-300"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                        Message Content
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Introduce your project details here..."
                        className="w-full bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 focus:border-red-500 focus:glow-red focus:outline-hidden text-white font-sans text-sm px-4 py-3.5 rounded-lg transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit layout */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-red-600 hover:bg-neutral-900 border border-red-500 disabled:opacity-50 text-white font-sans text-sm tracking-widest uppercase font-semibold text-center flex items-center justify-center gap-2 rounded-lg transition-all duration-300 glow-red hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border border-t-transparent border-white animate-spin" />
                          <span>SENDING PIPELINE...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
