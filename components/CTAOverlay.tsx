'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CTAOverlay(){
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/cta-bg.jpg" alt="cta bg" fill style={{objectFit:'cover'}} />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 initial={{opacity:0, y:8}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-white text-3xl md:text-5xl font-bold">Dedicated to innovative solutions, redefining success in every project!</motion.h2>
        </div>
      </div>
    </section>
  )
}
