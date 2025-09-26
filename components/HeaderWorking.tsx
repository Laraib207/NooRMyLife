'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function HeaderWorking() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'backdrop-blur-xl bg-white/20 shadow-2xl border-b border-black/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-wider group">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:to-cyan-500">
              Laraib
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/work" className="relative px-4 py-2 rounded-lg hover:text-cyan-400 transition-all duration-300 hover:bg-white/5">
              Work
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/about" className="relative px-4 py-2 rounded-lg hover:text-cyan-400 transition-all duration-300 hover:bg-white/5">
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={()=>setOpen(!open)}
          aria-label="menu"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link href="/work" className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                Work
              </Link>
              <Link href="/about" className="px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                About
              </Link>
              <Link href="/contact" className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-center">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
