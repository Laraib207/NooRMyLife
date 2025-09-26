// 'use client'
// import Image from 'next/image'
// const logos = ['/images/client-1.png','/images/client-2.png','/images/client-3.png','/images/client-4.png','/images/client-5.png']

// export default function ClientsStrip(){
//   return (
//     <section className="py-10 bg-slate-100">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <p className="text-sm text-slate-500">Trusted Collaborations</p>
//         <h3 className="mt-4 text-4xl font-bold">Our Clients</h3>
//         <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-0">
//           {logos.map((l,i)=>(
//             <div key={i} className="p-8 border">
//               <Image src={l} alt={`client ${i+1}`} width={200} height={60} className="mx-auto object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FiUsers, 
  FiTrendingUp, 
  FiStar, 
  FiAward,
  FiGlobe,
  FiHeart,
  FiTarget,
  FiZap
} from 'react-icons/fi'

export default function ClientsGrid() {
  // Client data with enhanced information
  const clients = [
    {
      name: 'Veer Bharat Project',
      logo: '/images/client-1.png',
      category: 'Government Initiative',
      project: 'Digital India Platform',
      year: '2024',
      rating: 5,
      testimonial: 'Exceptional work on our digital transformation initiative.',
      featured: true
    },
    {
      name: 'TechCorp Solutions',
      logo: '/images/client-2.png',
      category: 'Technology',
      project: 'Enterprise Dashboard',
      year: '2024',
      rating: 5,
      testimonial: 'Outstanding development and design expertise.',
      featured: true
    },
    {
      name: 'Innovation Labs',
      logo: '/images/client-3.png',
      category: 'Startup',
      project: 'Mobile App Development',
      year: '2023',
      rating: 4.8,
      testimonial: 'Professional approach and excellent results.',
      featured: false
    },
    {
      name: 'Global Dynamics',
      logo: '/images/client-4.png',
      category: 'Corporate',
      project: 'E-commerce Platform',
      year: '2023',
      rating: 4.9,
      testimonial: 'Delivered beyond our expectations.',
      featured: true
    },
    {
      name: 'Future Systems',
      logo: '/images/client-5.png',
      category: 'Enterprise',
      project: 'Data Analytics Suite',
      year: '2024',
      rating: 5,
      testimonial: 'Incredible technical skills and creativity.',
      featured: false
    },
    {
      name: 'Digital Pioneers',
      logo: '/images/client-1.png',
      category: 'Agency',
      project: 'Brand Identity System',
      year: '2023',
      rating: 4.7,
      testimonial: 'Amazing design sensibility and execution.',
      featured: false
    },
    {
      name: 'Smart Solutions',
      logo: '/images/client-2.png',
      category: 'Technology',
      project: 'IoT Platform',
      year: '2024',
      rating: 4.9,
      testimonial: 'Cutting-edge development work.',
      featured: true
    },
    {
      name: 'NextGen Enterprises',
      logo: '/images/client-3.png',
      category: 'Startup',
      project: 'SaaS Application',
      year: '2024',
      rating: 5,
      testimonial: 'Professional, reliable, and innovative.',
      featured: false
    }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const featuredClients = clients.filter(c => c.featured)
  const stats = [
    { number: '25+', label: 'Happy Clients', icon: <FiUsers className="w-6 h-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FiHeart className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <FiStar className="w-6 h-6" /> },
    { number: '50+', label: 'Projects Delivered', icon: <FiTarget className="w-6 h-6" /> }
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Hero Header */}
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
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Trusted Partnerships • Growing Network
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Trusted
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Collaborations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Building <span className="text-emerald-400 font-semibold">lasting partnerships</span> with 
            <span className="text-green-400 font-semibold"> innovative organizations</span> and delivering 
            <span className="text-teal-400 font-semibold"> exceptional results</span> across diverse industries
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
              className="p-6 lg:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80 text-center group hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-emerald-400 font-medium mb-2">Premium Partnerships</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Featured Clients</h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
            >
              <FiAward className="w-4 h-4 text-yellow-400" />
              Top Collaborations
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {featuredClients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
              >
                {/* Client Logo */}
                <div className="relative h-32 lg:h-40 flex items-center justify-center p-8 bg-white/5">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-0 invert opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-xs font-semibold text-white">
                    Featured
                  </div>
                </div>

                {/* Client Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">
                      {client.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-slate-400">{client.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {client.name}
                  </h4>
                  
                  <p className="text-sm text-slate-400 mb-3">
                    {client.project} • {client.year}
                  </p>

                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "{client.testimonial}"
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-16">
            <p className="text-sm text-green-400 font-medium mb-2">Complete Network</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Our Client Family
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg">
              A growing network of satisfied clients across multiple industries and project scales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-6">
            {clients.map((client, i) => (
              <motion.div
                key={`${client.name}-${i}`}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-green-400/30 transition-all duration-300"
              >
                {/* Client Logo Container */}
                <div className="relative h-24 lg:h-32 flex items-center justify-center p-4 lg:p-6 bg-white/5">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={40}
                    className="object-contain transition-all duration-300 group-hover:scale-110 filter brightness-0 invert opacity-70 group-hover:opacity-100"
                  />
                  
                  {/* Rating Indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-yellow-400">
                      <FiStar className="w-3 h-3 fill-current" />
                      {client.rating}
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="p-3 lg:p-4">
                  <h4 className="font-semibold text-white text-xs lg:text-sm mb-1 group-hover:text-green-400 transition-colors line-clamp-1">
                    {client.name}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{client.category}</span>
                    <span className="text-xs text-slate-500">{client.year}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-slate-900/80 to-emerald-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                <FiZap className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            
            <p className="text-slate-300 mb-8 text-base lg:text-lg leading-relaxed">
              We're constantly expanding our network of partnerships. From ambitious startups to established enterprises, 
              we're ready to bring your vision to life with cutting-edge technology and creative excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                Start Your Project
                <FiTrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                <FiGlobe className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}