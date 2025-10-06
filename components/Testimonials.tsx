// 'use client'
// export default function Testimonials(){
//   const items = [
//     { name:'Sarah Johnson', role:'CMO of Roon', text:"A. Rodriguez’s custom solutions revolutionized our online presence..." },
//     { name:'Hannah Green', role:'Director of Vailu', text:'Our online engagement tripled with their help...' }
//   ]
//   return (
//     <section className="bg-slate-800 text-white py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <p className="text-sm text-slate-300">Client Feedback</p>
//         <h3 className="mt-4 text-4xl font-bold">Success Stories</h3>
//         <div className="mt-8 grid md:grid-cols-2 gap-6">
//           {items.map((it,i)=>(
//             <div key={i} className="p-8 bg-slate-900/70 rounded">
//               <div className="font-medium text-lg">{it.name}</div>
//               <div className="text-sm text-slate-400">{it.role}</div>
//               <p className="mt-4 text-slate-200">{it.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import { motion } from 'framer-motion'
import { FiStar, FiMessageSquare, FiAward, FiTrendingUp, FiCheckCircle, FiUsers } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Veer Sri Shyam Agro Industries',
    role: 'Managing Director',
    company: 'Agro Industries',
    text: "Working with A. Rodriguez transformed our business operations completely. The client dashboard and payment system streamlined our entire workflow, saving us countless hours.",
    rating: 5,
    impact: [
      'Reduced processing time by 70%',
      'Improved client satisfaction by 85%',
      'Streamlined payment collection'
    ],
    color: 'indigo'
  },
  {
    name: 'Sarah Johnson',
    role: 'CMO',
    company: 'Roon Technologies',
    text: "The asset tracking system delivered exceptional results. Professional approach, clean code, and seamless integration with our existing infrastructure. Highly recommended!",
    rating: 5,
    impact: [
      'Real-time asset monitoring',
      'Zero downtime migration',
      '100% accuracy in tracking'
    ],
    color: 'purple'
  },
  {
    name: 'Genet IT Company',
    role: 'Project Manager',
    company: 'Technology Solutions',
    text: "A reliable full-stack developer who consistently delivers quality work. Managed multiple client projects simultaneously with excellent communication and technical expertise.",
    rating: 5,
    impact: [
      'Multiple successful deployments',
      'Client retention increased 40%',
      'Zero critical bugs in production'
    ],
    color: 'pink'
  },
  {
    name: 'Hannah Green',
    role: 'Director of Operations',
    company: 'Vailu E-commerce',
    text: "Our online engagement tripled after implementing the V-Mart shopping platform. The intuitive interface and robust backend made a significant difference in our conversion rates.",
    rating: 5,
    impact: [
      '300% increase in engagement',
      '2x faster checkout process',
      'Mobile-first responsive design'
    ],
    color: 'indigo'
  },
  {
    name: 'Tech Startup Founder',
    role: 'CEO',
    company: 'Innovation Labs',
    text: "Exceptional problem-solving skills and attention to detail. The payment gateway integration was flawless, secure, and completed ahead of schedule.",
    rating: 5,
    impact: [
      'Secure payment processing',
      'PCI DSS compliant',
      'Delivered 2 weeks early'
    ],
    color: 'purple'
  },
  {
    name: 'Academic Supervisor',
    role: 'Professor',
    company: 'University',
    text: "One of the most dedicated students I've supervised. The final year asset tracking project demonstrated advanced technical skills and real-world applicability.",
    rating: 5,
    impact: [
      'Achieved top grades',
      'Innovative solution design',
      'Production-ready quality'
    ],
    color: 'pink'
  }
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      indigo: {
        border: 'hover:border-indigo-400/30',
        accent: 'text-indigo-400',
        bg: 'bg-indigo-500/20',
        gradient: 'from-indigo-500/10 to-indigo-900/10'
      },
      purple: {
        border: 'hover:border-purple-400/30',
        accent: 'text-purple-400',
        bg: 'bg-purple-500/20',
        gradient: 'from-purple-500/10 to-purple-900/10'
      },
      pink: {
        border: 'hover:border-pink-400/30',
        accent: 'text-pink-400',
        bg: 'bg-pink-500/20',
        gradient: 'from-pink-500/10 to-pink-900/10'
      }
    }
    return colors[color]
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
          >
            <FiUsers className="w-4 h-4 text-purple-400" />
            Client Feedback • Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trusted by
            </span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real feedback from <span className="text-purple-400 font-semibold">satisfied clients</span> and 
            <span className="text-pink-400 font-semibold"> successful collaborations</span> across diverse industries
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {testimonials.map((testimonial, i) => {
            const colorClasses = getColorClasses(testimonial.color)
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 ${colorClasses.border} transition-all duration-300 p-6 lg:p-8`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <FiMessageSquare className="w-16 h-16 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className={`w-4 h-4 ${colorClasses.accent} fill-current`} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Impact Points */}
                <div className="space-y-2 mb-6 pb-6 border-b border-white/10">
                  {testimonial.impact.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FiCheckCircle className={`w-4 h-4 ${colorClasses.accent} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-slate-400">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center border border-white/20`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <p className={`text-xs ${colorClasses.accent} font-medium`}>{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { number: '100%', label: 'Client Satisfaction', icon: <FiAward className="w-5 h-5" /> },
            { number: '6+', label: 'Happy Clients', icon: <FiUsers className="w-5 h-5" /> },
            { number: '85%', label: 'Average Improvement', icon: <FiTrendingUp className="w-5 h-5" /> },
            { number: '5⭐', label: 'Average Rating', icon: <FiStar className="w-5 h-5" /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
              className="p-6 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80 group hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
