
// 'use client'
// export default function AwardsSection(){
//   return (
//     <section id="awards" className="py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-extrabold mb-6">Awards & Recognition</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 border rounded-lg bg-white/50 dark:bg-slate-800">
//             <h3 className="font-semibold">Design Award 2024</h3>
//             <p className="text-sm text-slate-600">Recognized for outstanding UI design.</p>
//           </div>
//           <div className="p-6 border rounded-lg bg-white/50 dark:bg-slate-800">
//             <h3 className="font-semibold">Hackathon Winner</h3>
//             <p className="text-sm text-slate-600">Top prize for prototype innovation.</p>
//           </div>
//           <div className="p-6 border rounded-lg bg-white/50 dark:bg-slate-800">
//             <h3 className="font-semibold">Open Source Contributor</h3>
//             <p className="text-sm text-slate-600">Contributed to 5+ community projects.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'
import { motion } from 'framer-motion'
import { TrophyIcon, StarIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

export default function AwardsSection(){
  const { theme } = useTheme()

  const awards = [
    {
      title: "Design Award 2024",
      description: "Recognized for outstanding UI design and user experience innovation",
      icon: SparklesIcon,
      year: "2024",
      organization: "Design Excellence Awards",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      title: "Hackathon Winner",
      description: "Top prize for prototype innovation and creative problem solving",
      icon: TrophyIcon,
      year: "2023",
      organization: "TechHack Global",
      color: "from-cyan-500 to-blue-500",
      delay: 0.2
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 5+ community projects with over 1000+ stars",
      icon: CodeBracketIcon,
      year: "2023",
      organization: "GitHub Community",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    }
  ]

  return (
    <section id="awards" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,119,198,0.15),transparent_40%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
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



      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
          >
            <TrophyIcon className="w-4 h-4 text-yellow-400" />
            Recognition & Achievements
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Celebrating milestones in my journey of <span className="text-yellow-400 font-semibold">innovation</span> and <span className="text-orange-400 font-semibold">excellence</span>
          </motion.p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: award.delay }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${award.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative glass-dark rounded-2xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                  {/* Award Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${award.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{award.year}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">{award.organization}</div>
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                      {award.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {award.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Achievement Unlocked</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 glass-dark rounded-full border border-white/20 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">3+</div>
              <div className="text-slate-400 text-sm">Awards Won</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">2024</div>
              <div className="text-slate-400 text-sm">Latest Recognition</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}