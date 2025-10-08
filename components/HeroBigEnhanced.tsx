'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function HeroBigEnhanced(){
  const { theme } = useTheme()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        {!isVideoLoaded && (
          <Image
            src="/images/hero-bg.jpg"
            alt="hero background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
        <div className={`absolute inset-0 transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90'
            : 'bg-gradient-to-b from-white/70 via-white/50 to-white/80'
        }`} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-cyan-400/30' : 'bg-cyan-500/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + summary */}
          <motion.div
            initial={{opacity:0, x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.8}}
            className="space-y-8"
          >
            <motion.div
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.2}}
            >
              <p className={`text-sm uppercase tracking-wider font-semibold ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                ✨ Full-stack • Designer • Creator
              </p>
            </motion.div>

            <motion.h1
              initial={{opacity:0, scale:0.9}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.8, delay:0.3}}
              className="hero-huge text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.85] tracking-tight"
            >
              <span className={`bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 bg-clip-text text-transparent ${
                theme === 'dark' ? 'drop-shadow-2xl' : ''
              }`}>
                Laraib
              </span>
              <br/>
              <span className={`bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent ${
                theme === 'dark' ? 'drop-shadow-2xl' : ''
              }`}>
                Siddiqui
              </span>
            </motion.h1>

            <motion.p
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.4}}
              className={`text-xl leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              I craft <span className="font-semibold text-cyan-500">premium digital experiences</span> — combining cutting-edge technology, stunning visuals, and compelling storytelling. MCA graduate, technical blogger and creative visionary.
            </motion.p>

            <motion.div
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.5}}
              className="flex flex-wrap gap-4"
            >
              <Link href="/work" className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 font-semibold">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link href="/contact" className={`px-8 py-4 rounded-full border-2 backdrop-blur-sm transition-all duration-300 font-semibold hover:scale-105 ${
                theme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}>
                Hire Me
              </Link>
              <a href="/resume.pdf" className={`px-6 py-4 rounded-full backdrop-blur-sm transition-all duration-300 font-semibold hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-white text-slate-800 shadow-lg hover:shadow-xl'
              }`}>
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.6}}
              className="flex gap-8 items-center text-sm"
            >
              <div className={`text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="text-3xl font-bold text-cyan-500">50+</div>
                <div>Projects</div>
              </div>
              <div className={`text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="text-3xl font-bold text-purple-500">30+</div>
                <div>Clients</div>
              </div>
              <div className={`text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="text-3xl font-bold text-pink-500">7 yrs</div>
                <div>Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: floating portrait card */}
          <motion.div
            initial={{opacity:0, y:50, scale:0.9}}
            animate={{opacity:1, y:0, scale:1}}
            transition={{duration:0.9, delay:0.4}}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <div className={`relative w-full max-w-md glass rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                theme === 'dark' ? 'border-white/20' : 'border-white/30'
              }`}>
                <div className="relative h-[480px] md:h-[520px]">
                  <Image
                    src="/images/LaRaiB.png"
                    alt="Laraib portrait"
                    fill
                    style={{objectFit:'cover'}}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark'
                      ? 'from-transparent via-slate-900/20 to-slate-900/60'
                      : 'from-transparent via-white/20 to-white/40'
                  }`} />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-slate-800 dark:text-white">Laraib Siddiqui</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                        Web Developer · Blogger · Creator
                      </div>
                    </div>
                    <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                    }`}>
                      MCA
                    </div>
                  </div>

                  <div className={`text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Crafting exceptional UI systems, accessible interfaces and performance-first websites — I document processes on my blog and share experiments via vlogs.
                  </div>

                  <div className="flex gap-3">
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}>
                      Read Blog
                    </button>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border border-white/20 text-white hover:bg-white/10'
                        : 'border border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}>
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-6 h-10 border-2 rounded-full p-1 ${
          theme === 'dark' ? 'border-white/30' : 'border-slate-400'
        }`}>
          <motion.div
            animate={{y: [0, 12, 0]}}
            transition={{duration:2, repeat:Infinity}}
            className={`w-1 h-3 rounded-full ${
              theme === 'dark' ? 'bg-white/60' : 'bg-slate-400'
            }`}
          />
        </div>
      </motion.div>
    </section>
  )
}
