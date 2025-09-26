// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useTheme } from '../context/ThemeContext'
// import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// export default function HeroBig(){
//   const { theme } = useTheme()

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.6, 1, 0.6],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
//             >
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Available for new projects
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
//             >
//               <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Laraib
//               </span>
//               <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
//                 Siddiqui
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
//             >
//               Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend
//               <span className="text-purple-400 font-semibold"> creativity</span> with
//               <span className="text-pink-400 font-semibold"> cutting-edge technology</span>
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//             >
//               <Link href="/work" className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
//                 View My Work
//                 <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
//                 <PlayIcon className="w-5 h-5" />
//                 Watch Demo
//               </button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="grid grid-cols-3 gap-8 text-center lg:text-left"
//             >
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
//                 <div className="text-slate-400">Projects</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
//                 <div className="text-slate-400">Clients</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
//                 <div className="text-slate-400">Years</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotateY: -15 }}
//             animate={{ opacity: 1, x: 0, rotateY: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="relative">
//               {/* Glow effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30" />

//               <div className="relative glass-dark rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl">
//                 <div className="relative h-[500px] md:h-[600px]">
//                   <Image
//                     src="/images/LaRaiB.png"
//                     alt="Laraib Siddiqui"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="transition-transform duration-700 hover:scale-110"
//                   />

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                   {/* Floating badge */}
//                   <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
//                     <div className="flex items-center gap-2 text-white text-sm">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                       Online
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-white mb-2">Laraib Siddiqui</h3>
//                     <p className="text-cyan-400 font-medium mb-4">Full-Stack Developer & Designer</p>
//                     <p className="text-slate-300 text-sm leading-relaxed mb-6">
//                       Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.
//                     </p>

//                     <div className="flex justify-center gap-4">
//                       <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                         <div className="text-white font-semibold">MCA</div>
//                         <div className="text-slate-400 text-xs">Computer Applications</div>
//                       </div>
//                       <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                         <div className="text-white font-semibold">5+ Years</div>
//                         <div className="text-slate-400 text-xs">Experience</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center gap-2 text-white/60">
//           <span className="text-sm">Scroll to explore</span>
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white/60 rounded-full mt-2"
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }






'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HeroBig(){
  const { theme } = useTheme()

  return (
    // <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
    <section className="relative min-h-screen flex items-center overflow-hidden" >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
            >
              <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Laraib
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Siddiqui
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
            >
              Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend
              <span className="text-purple-400 font-semibold"> creativity</span> with
              <span className="text-pink-400 font-semibold"> cutting-edge technology</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link href="/work" className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                View My Work
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-slate-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-slate-400">Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-slate-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30" />

              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <div className="relative h-[450px] md:h-[500px] lg:h-[550px]">
                  <Image
                    src="/images/LaRaiB.png"
                    alt="Laraib Siddiqui"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Laraib Siddiqui</h3>
                    <p className="text-cyan-400 font-medium mb-4">Full-Stack Developer & Designer</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.
                    </p>

                    <div className="flex justify-center gap-3">
                      <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <div className="text-white font-semibold text-sm">MCA</div>
                        <div className="text-slate-400 text-xs">Computer Applications</div>
                      </div>
                      <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                        <div className="text-white font-semibold text-sm">5+ Years</div>
                        <div className="text-slate-400 text-xs">Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}