'use client'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={toggleTheme}
        className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        type="button"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : 180,
            scale: theme === 'light' ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <SunIcon className="w-5 h-5 text-yellow-500" />
          ) : (
            <MoonIcon className="w-5 h-5 text-blue-300" />
          )}
        </motion.div>

        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
            : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
        }`} />
      </button>
    </motion.div>
  )
}
