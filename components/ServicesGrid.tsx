'use client'
import { motion } from 'framer-motion'
import {
  FiSettings,
  FiSearch,
  FiUsers,
  FiTarget,
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiBarChart,
  FiSmartphone,
  FiGlobe,
  FiShield,
  FiCloud,
  FiCpu,
  FiLayers
} from 'react-icons/fi'

export default function ServicesGrid() {
  const mainServices = [
    { 
      icon: <FiSettings size={28} />, 
      title: 'Tailored Development', 
      sub: 'Custom Solutions' 
    },
    { 
      icon: <FiSearch size={28} />, 
      title: 'SEO Expertise', 
      sub: 'Search Optimization' 
    },
    { 
      icon: <FiUsers size={28} />, 
      title: 'Social Engagement', 
      sub: 'Audience Growth' 
    },
    { 
      icon: <FiTarget size={28} />, 
      title: 'Targeted Marketing', 
      sub: 'ROI Maximization' 
    },
  ]

  const comprehensiveServices = [
    { 
      icon: <FiCode size={20} />, 
      title: 'Full-Stack Development', 
      desc: 'End-to-end web applications with modern frameworks' 
    },
    { 
      icon: <FiGlobe size={20} />, 
      title: 'E-commerce Solutions', 
      desc: 'Complete online stores with payment integration' 
    },
    { 
      icon: <FiCpu size={20} />, 
      title: 'Machine Learning', 
      desc: 'AI-powered solutions and predictive analytics' 
    },
    { 
      icon: <FiTrendingUp size={20} />, 
      title: 'Digital Marketing', 
      desc: 'Strategic campaigns and brand growth' 
    },
    {
      icon: <FiBarChart size={20} />,
      title: 'Data Analysis',
      desc: 'Business insights and data visualization'
    },
    { 
      icon: <FiSmartphone size={20} />, 
      title: 'Android Development', 
      desc: 'Native mobile applications' 
    },
    { 
      icon: <FiDatabase size={20} />, 
      title: 'Database Management', 
      desc: 'Efficient data handling and optimization' 
    },
    { 
      icon: <FiCloud size={20} />, 
      title: 'Cloud Solutions', 
      desc: 'Scalable infrastructure and deployment' 
    },
    { 
      icon: <FiShield size={20} />, 
      title: 'Cybersecurity', 
      desc: 'Secure systems and data protection' 
    },
    { 
      icon: <FiSettings size={20} />, 
      title: 'Backend Engineering', 
      desc: 'Robust server-side architecture' 
    },
    { 
      icon: <FiLayers size={20} />, 
      title: 'System Integration', 
      desc: 'Seamless third-party integrations' 
    },
    { 
      icon: <FiUsers size={20} />, 
      title: 'Freelance Services', 
      desc: 'Flexible project-based solutions' 
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            MCA Graduate • Full-Stack Expert
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              iBzA@
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From <span className="text-blue-400 font-semibold">cutting-edge Expensive development</span> to 
            <span className="text-purple-400 font-semibold"> intelligent analytics</span>, delivering 
            <span className="text-cyan-400 font-semibold"> end-to-end solutions</span> that drive business growth.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm text-cyan-400 font-medium mb-2">Core Offerings</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">What We Deliver</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden bg-slate-900/80">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                className="p-8 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center text-blue-400 bg-blue-400/10 rounded-2xl group-hover:scale-110 group-hover:bg-blue-400/20 transition-all duration-300 mb-6">
                  {service.icon}
                </div>
                <h4 className="font-bold text-white text-lg mb-2">{service.title}</h4>
                <p className="text-sm text-slate-400">{service.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comprehensive Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-16">
            <p className="text-sm text-purple-400 font-medium mb-2">Complete Expertise</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                12+ Specialized Services
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Leveraging my Master's in Computer Applications to deliver innovative solutions across all domains of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comprehensiveServices.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 backdrop-blur-xl relative bg-slate-900/80"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-blue-400 bg-blue-400/10 rounded-lg group-hover:bg-blue-400/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm md:text-base mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '12+', label: 'Services Offered' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
              className="p-6 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <button className="group px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
            Start Your Project
            <FiTarget className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}