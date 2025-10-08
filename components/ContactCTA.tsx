// import Link from 'next/link'

// export default function ContactCTA() {
//   return (
//     <div className="rounded-xl p-8 bg-gradient-to-r from-indigo-50 to-white border">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//         <div>
//           <h3 className="text-2xl font-semibold">Want to build something together?</h3>
//           <p className="text-slate-600 mt-2">I’m available for freelance work and collaborations. Let’s talk..</p>
//         </div>
//         <div className="flex gap-3">
//           <Link href="/contact" className="px-5 py-3 bg-accent text-white rounded-md">Get in touch</Link>
//           <a href="/resume.pdf" className="px-5 py-3 border rounded-md">Download CV</a>
//         </div>
//       </div>
//     </div>
//   )

// }
// </div>

//                 <motion.button
//                   onClick={handleSubmit}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <FiSend className="w-5 h-5" />
//                   Send Message
//                 </motion.button>


//                 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { useState } from 'react'
// import { 
//   FiMail, 
//   FiGithub, 
//   FiLinkedin, 
//   FiTwitter,
//   FiArrowRight,
//   FiDownload,
//   FiMessageCircle,
//   FiPhone,
//   FiMapPin,
//   FiSend,
//   FiCheck
// } from 'react-icons/fi'

// export default function ContactCTA() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Simulate form submission
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//       setIsOpen(false)
//     }, 2000)
//   }

//   const contactMethods = [
//     {
//       icon: <FiMail className="w-5 h-5" />,
//       label: 'Email',
//       value: 'your.email@example.com',
//       href: 'laraibsiddiqui10ki@gmail.com',
//       color: 'indigo'
//     },
//     {
//       icon: <FiPhone className="w-5 h-5" />,
//       label: 'Phone',
//       value: '+91 6205771930',
//       href: 'tel:+91 6205771930',
//       color: 'purple'
//     },
//     {
//       icon: <FiMapPin className="w-5 h-5" />,
//       label: 'Location',
//       value: ' Bihar, India',
//       href: '#',
//       color: 'pink'
//     }
//   ]

//   const socialLinks = [
//     { icon: <FiGithub className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Laraib207', color: 'hover:text-indigo-400' },
//     { icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-laibu-173907279', color: 'hover:text-blue-400' },
//     { icon: <FiTwitter className="w-5 h-5" />, label: 'Twitter', href: 'https://x.com/LaraibS54465957?t=gouftMaiXVav8Ct4qEqBng&s=08', color: 'hover:text-sky-400' },
//     { icon: <FiMessageCircle className="w-5 h-5" />, label: 'WhatsApp', href: '6205771930', color: 'hover:text-green-400' }
//   ]

//   return (
//     <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
        
//         {/* Animated Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
//         {/* Main CTA Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl"
//         >
//           <div className="grid md:grid-cols-2 gap-0">
//             {/* Left Side - Content */}
//             <div className="p-8 lg:p-12 flex flex-col justify-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                   Available for Work
//                 </div>

//                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
//                   Want to build something{' '}
//                   <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     amazing together?
//                   </span>
//                 </h3>

//                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
//                   I'm available for freelance projects, full-time opportunities, and exciting collaborations. 
//                   Let's create something <span className="text-indigo-400 font-semibold">extraordinary</span>.
//                 </p>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
//                   {[
//                     { label: 'Response Time', value: '< 24hrs' },
//                     { label: 'Projects Done', value: '6+' },
//                     { label: 'Satisfaction', value: '100%' }
//                   ].map((stat, i) => (
//                     <div key={i}>
//                       <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                         {stat.value}
//                       </div>
//                       <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setIsOpen(true)}
//                     className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3"
//                   >
//                     <FiMessageCircle className="w-5 h-5" />
//                     Get in Touch
//                     <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>

//                   <motion.a
//                     href="/resume.pdf"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
//                   >
//                     <FiDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                     Download CV
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Side - Contact Info */}
//             <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 lg:p-12 flex flex-col justify-center border-l border-white/10">
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="space-y-6"
//               >
//                 <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>

//                 {/* Contact Methods */}
//                 <div className="space-y-4">
//                   {contactMethods.map((method, i) => (
//                     <motion.a
//                       key={i}
//                       href={method.href}
//                       whileHover={{ x: 5 }}
//                       className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
//                     >
//                       <div className={`p-3 rounded-full bg-${method.color}-500/20 text-${method.color}-400 group-hover:scale-110 transition-transform`}>
//                         {method.icon}
//                       </div>
//                       <div>
//                         <p className="text-xs text-slate-400">{method.label}</p>
//                         <p className="text-white font-medium">{method.value}</p>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>

//                 {/* Social Links */}
//                 <div className="pt-6 border-t border-white/10">
//                   <p className="text-sm text-slate-400 mb-4">Connect with me</p>
//                   <div className="flex gap-3">
//                     {socialLinks.map((social, i) => (
//                       <motion.a
//                         key={i}
//                         href={social.href}
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         whileTap={{ scale: 0.9 }}
//                         className={`p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 ${social.color} transition-all duration-300`}
//                         title={social.label}
//                       >
//                         {social.icon}
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Availability Badge */}
//                 <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//                     <div>
//                       <p className="text-green-400 font-semibold text-sm">Currently Available</p>
//                       <p className="text-slate-400 text-xs">Open to new opportunities</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Additional CTA Sections */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="grid md:grid-cols-3 gap-6 mt-8"
//         >
//           {[
//             {
//               icon: <FiMessageCircle className="w-6 h-6" />,
//               title: 'Quick Response',
//               desc: 'Get a reply within 24 hours',
//               color: 'indigo'
//             },
//             {
//               icon: <FiCheck className="w-6 h-6" />,
//               title: 'Quality Assured',
//               desc: 'Professional & reliable delivery',
//               color: 'purple'
//             },
//             {
//               icon: <FiSend className="w-6 h-6" />,
//               title: 'Flexible Engagement',
//               desc: 'Freelance, contract, or full-time',
//               color: 'pink'
//             }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="p-6 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
//             >
//               <div className={`inline-flex p-3 rounded-full bg-${item.color}-500/20 text-${item.color}-400 mb-4`}>
//                 {item.icon}
//               </div>
//               <h5 className="text-white font-bold mb-2">{item.title}</h5>
//               <p className="text-slate-400 text-sm">{item.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Contact Modal */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={() => setIsOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-slate-900 rounded-2xl border border-white/20 p-8 max-w-md w-full shadow-2xl"
//           >
//             {submitted ? (
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <FiCheck className="w-10 h-10 text-green-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-slate-400">I'll get back to you soon.</p>
//               </motion.div>
//             ) : (
//               <>
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="p-2 hover:bg-white/10 rounded-full transition-colors"
//                   >
//                     <span className="text-white text-2xl">&times;</span>
//                   </button>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors"
//                       placeholder="Laibu Shaikh"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors"
//                       placeholder="laraibsiddiqui10ki@gmail.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       required
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       rows={4}
//                       className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors resize-none"
//                       placeholder="Tell me about your project..."
//                     />
//                   </div>

//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <FiSend className="w-5 h-5" />
//                     Send Message
//                   </motion.button>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   )
// }




'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter,
  FiArrowRight,
  FiDownload,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck
} from 'react-icons/fi'

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      setIsOpen(false)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      value: 'laraibsiddiqui10ki@gmail.com',
      href: 'mailto:laraibsiddiqui10ki@gmail.com',
      color: 'indigo'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 6205771930',
      href: 'tel:+916205771930',
      color: 'purple'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Bihar, India',
      href: 'https://maps.google.com/?q=Bihar,India',
      color: 'pink'
    }
  ]

  const socialLinks = [
    { 
      icon: <FiGithub className="w-5 h-5" />, 
      label: 'GitHub', 
      href: 'https://github.com/Laraib207', 
      color: 'hover:text-indigo-400' 
    },
    { 
      icon: <FiLinkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/md-laibu-173907279', 
      color: 'hover:text-blue-400' 
    },
    { 
      icon: <FiTwitter className="w-5 h-5" />, 
      label: 'Twitter', 
      href: 'https://x.com/LaraibS54465957?t=gouftMaiXVav8Ct4qEqBng&s=08', 
      color: 'hover:text-sky-400' 
    },
    { 
      icon: <FiMessageCircle className="w-5 h-5" />, 
      label: 'WhatsApp', 
      href: 'https://wa.me/916205771930', 
      color: 'hover:text-green-400' 
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for Work
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Want to build something{' '}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    amazing together?
                  </span>
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  I'm available for freelance projects, full-time opportunities, and exciting collaborations. 
                  Let's create something <span className="text-indigo-400 font-semibold">extraordinary</span>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
                  {[
                    { label: 'Response Time', value: '< 24hrs' },
                    { label: 'Projects Done', value: '6+' },
                    { label: 'Satisfaction', value: '100%' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    Get in Touch
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FiDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 lg:p-12 flex flex-col justify-center border-l border-white/10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method, i) => (
                    <motion.a
                      key={i}
                      href={method.href}
                      target={method.label === 'Location' ? '_blank' : '_self'}
                      rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-full bg-${method.color}-500/20 text-${method.color}-400 group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">{method.label}</p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links - FIXED */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400 mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 ${social.color} transition-all duration-300`}
                        title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Currently Available</p>
                      <p className="text-slate-400 text-xs">Open to new opportunities</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional CTA Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          {[
            {
              icon: <FiMessageCircle className="w-6 h-6" />,
              title: 'Quick Response',
              desc: 'Get a reply within 24 hours',
              color: 'indigo'
            },
            {
              icon: <FiCheck className="w-6 h-6" />,
              title: 'Quality Assured',
              desc: 'Professional & reliable delivery',
              color: 'purple'
            },
            {
              icon: <FiSend className="w-6 h-6" />,
              title: 'Flexible Engagement',
              desc: 'Freelance, contract, or full-time',
              color: 'pink'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-${item.color}-500/20 text-${item.color}-400 mb-4`}>
                {item.icon}
              </div>
              <h5 className="text-white font-bold mb-2">{item.title}</h5>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl border border-white/20 p-8 max-w-md w-full shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <span className="text-white text-2xl">&times;</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors"
                      placeholder="Laraib Siddiqui"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors"
                      placeholder="laraibsiddiqui10ki@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
