"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] as const
    } 
  },
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_r23qjix', 
    'template_fhi35cb', 
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      location: formData.location
    },
    'l6v75i70BwEPtO2mI'
  )
  .then(() => {
    setSubmitted(true);
    setFormData({ name: "", email: "", location: "", budget: "", subject: "", message: "" });
  })
  .catch((err) => console.error("Failed to send:", err));
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      label: "Address:",
      value: "Kandy Sri Lanka",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "My Email:",
      value: "srimalherath991@gmail.com ",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "Call Me Now:",
      value: "070-3930877 / 076-1481687",
      color: "bg-violet-100 text-violet-600"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-32 no-print overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Let’s discuss your Project
              </h2>
              <p className="text-slate-500 text-lg max-w-md">
                I’m available for freelance work. Drop me a line if you have a project you think I’d be a good fit for.
              </p>
            </motion.div>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 group"
                >
                  <div className={`p-4 rounded-xl transition-transform duration-300 group-hover:scale-110 ${info.color}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg font-bold text-slate-800">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="flex gap-6 mt-4 text-slate-400">
               {['facebook', 'dribbble', 'instagram', 'linkedin', 'behance'].map((social) => (
                 <motion.div key={social} whileHover={{ y: -5, color: '#f97316' }}>
                    <Link href="#" className="transition-colors">
                      <div className="w-6 h-6 capitalize font-bold">{social[0]}</div>
                    </Link>
                 </motion.div>
               ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-500 mb-4">I'm always open to discussing product design work or partnership opportunities.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", placeholder: "Name*", type: "text", required: true },
                { name: "email", placeholder: "Email*", type: "email", required: true },
                { name: "location", placeholder: "Location*", type: "text", required: false }
              ].map((field) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <input 
                    required={field.required}
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full border-b border-slate-200 py-3 focus:border-orange-500 outline-none transition-all duration-300 placeholder:text-slate-400 focus:pl-2"
                  />
                </motion.div>
              ))}
              
              <div className="grid grid-cols-2 gap-8">
                {/* <motion.input 
                  variants={itemVariants}
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange} 
                  placeholder="Budget*" 
                  className="w-full border-b border-slate-200 py-3 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 focus:pl-2" 
                /> */}
                <motion.input 
                  variants={itemVariants}
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Subject*" 
                  className="w-full border-b border-slate-200 py-3 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 focus:pl-2" 
                />
              </div>

              <motion.textarea 
                variants={itemVariants}
                required 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message*" 
                rows={3} 
                className="w-full border-b border-slate-200 py-3 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-slate-400 focus:pl-2" 
              />

              {submitted && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-green-600 font-medium bg-green-50 p-3 rounded-lg border border-green-100"
                >
                  ✅ Email Successfully Sent!
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl flex items-center gap-3 font-bold transition-all shadow-lg shadow-orange-200 group cursor-pointer"
              >
                Submit
                
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;