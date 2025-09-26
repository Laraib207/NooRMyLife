'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

export default function HeaderEnhanced() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-lg border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider transition-colors">
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Laraib
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <Link href="/work" className="hover:text-accent transition-colors duration-200 font-medium">
            Work
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors duration-200 font-medium">
            About
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={()=>setOpen(!open)}
            aria-label="menu"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-white/20">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/work" className="py-2 hover:text-accent transition-colors">
              Work
            </Link>
            <Link href="/about" className="py-2 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-center font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
