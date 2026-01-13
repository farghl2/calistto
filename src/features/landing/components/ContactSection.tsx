"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/src/features/landing/schemes/contact.schema';
import { sendMessageToBo } from '@/src/actions/telBot';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

// Custom Select Component for "Glass" Design
const CustomSelect = ({ options, placeholder, onChange, value, hasError }: { options: string[], placeholder: string, onChange: (val: string) => void, value: string, hasError?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/5 border ${hasError ? 'border-red-500' : (isOpen ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10 hover:border-white/20')} rounded-lg p-3 text-left flex items-center justify-between transition-all duration-300 focus:outline-none`}
      >
        <span className={`${value ? "text-white" : "text-gray-400"} text-base`}>
          {value || placeholder}
        </span>
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-navy-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg overflow-hidden z-50 shadow-2xl ring-1 ring-cyan-500/20"
          >
            <div className="max-h-60 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
              {options.map((option, idx) => (
                 <button
                    key={idx}
                    type="button"
                    onClick={() => {
                        onChange(option);
                        setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-b border-white/5 last:border-0 hover:pl-6 ${value === option ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                >
                    {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed z-[70] inset-0 m-auto w-full max-w-sm h-fit bg-navy-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase tracking-wide">Message Sent!</h3>
                        <p className="text-gray-400 text-sm mb-6 font-light">
                            Thank you for reaching out. Our team will analyze your request and get back to you shortly.
                        </p>
                        <button 
                            onClick={onClose}
                            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                        >
                            Close
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default function ContactSection() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors }
  } = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
          name: '',
          email: '',
          company: '',
          industry: '',
          message: ''
      }
  });


  const industryOptions = [
    t('form.options.real_estate'),
    t('form.options.yachts'),
    t('form.options.finance'),
    t('form.options.other')
  ];

  const onSubmit = async (data: ContactFormData) => {
      setIsSubmitting(true);
      
      const messageBody = `
🚀 *New Lead from Website*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
🏢 *Company:* ${data.company || 'Not Provided'}
🏭 *Industry:* ${data.industry}

📝 *Message:*
${data.message}
      `;

      try {
          const res = await sendMessageToBo(messageBody);
          if (res.success) {
               setShowModal(true);
               reset();
          } else {
              alert('Failed to send message, please try again later.'); // Consider a better toast error
          }
      } catch (error) {
          console.error("Error sending message:", error);
          alert('An error occurred. Please try again.');
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <section className="relative py-24 pb-48 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10" id="contact">
      
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={40} colors={["#06B6D4", "#F59E0B"]} />
         <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />
         {/* Ambient Glows */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel-heavy p-8 rounded-2xl glow-box-cyan border-l-4 border-l-cyan-500 relative"
          >
            {/* Form Glow Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t('form.name')}</label>
                <input 
                    type="text" 
                    {...register('name')}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 placeholder:text-gray-600`} 
                    placeholder={t('form.name_placeholder')} 
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t('form.email')}</label>
                <input 
                    type="email" 
                    {...register('email')}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 placeholder:text-gray-600`} 
                    placeholder={t('form.email_placeholder')} 
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t('form.company')}</label>
                <input 
                    type="text" 
                    {...register('company')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 placeholder:text-gray-600" 
                    placeholder={t('form.company_placeholder')} 
                />
              </div>
              
              {/* Custom Select for Industry */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t('form.industry')}</label>
                <Controller
                    control={control}
                    name="industry"
                    render={({ field }) => (
                        <CustomSelect 
                            options={industryOptions}
                            placeholder={t('form.options.real_estate')} 
                            value={field.value}
                            onChange={(val) => field.onChange(val)}
                            hasError={!!errors.industry}
                        />
                    )}
                />
                {errors.industry && <span className="text-red-500 text-xs mt-1 block">{errors.industry.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t('form.message')}</label>
                <textarea 
                    rows={4} 
                    {...register('message')}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 placeholder:text-gray-600 resize-none`} 
                    placeholder={t('form.message_placeholder')} 
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all duration-300 tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? 'Sending...' : t('form.send')}
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-6"
          >
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('info.global_hq')}</span>
                  <span className="text-sm text-white font-medium">Alexandria, Egypt</span>
               </div>
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Mail size={18} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('info.email')}</span>
                  <span className="text-sm text-white font-medium">contact@calistto.com</span>
               </div>
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <Phone size={18} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{t('info.phone')}</span>
                  <span className="text-sm text-white font-medium">+20 123 456 7890</span>
               </div>
            </div>

            {/* World Map Visual (CSS Representation) */}
            <div className="flex-1 glass-panel rounded-2xl relative overflow-hidden min-h-[300px] border border-white/5">
               <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain opacity-20 invert" />
               
               {/* Glowing Points */}
               <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-cyan-500 rounded-full animate-ping" />
               <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-cyan-500 rounded-full border-2 border-white shadow-[0_0_20px_#06b6d4]" />
               
               <div className="absolute top-[35%] left-[48%] w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]" />
               <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]" />
               
               {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M 400 200 Q 300 100 150 150" stroke="#06b6d4" strokeWidth="1" fill="transparent" strokeOpacity="0.3" className="drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
               </svg>
            </div>

            {/* Partners */}
            <div className="glass-panel p-6 rounded-xl flex justify-between items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white/5">
               <span className="text-white font-bold flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rounded-sm" /> Microsoft Azure</span>
               <span className="text-white font-bold flex items-center gap-2">aws</span>
               <span className="text-white font-bold flex items-center gap-2"><div className="w-4 h-4 rounded-full border border-white" /> IBM Watson</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
