
// 'use client'
// export default function SkillsSection(){
//   return (
//     <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-extrabold mb-6">Skills & Tools</h2>
//         <p className="text-slate-600 dark:text-slate-300 mb-6">Expertise across design and frontend engineering.</p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {['Next.js','React','TypeScript','Tailwind','Figma','Node.js','Git','GraphQL'].map(s => (
//             <div key={s} className="p-4 bg-white/60 dark:bg-slate-800 rounded-lg shadow-sm">
//               <h3 className="font-semibold">{s}</h3>
//               <p className="text-xs text-slate-500 mt-1">Pro-level</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  CpuChipIcon, 
  CloudIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CommandLineIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function SkillsSection() {
  const { theme } = useTheme()

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: "Expert", icon: "⚛️" },
        { name: "Next.js", level: "Expert", icon: "▲" },
        { name: "TypeScript", level: "Expert", icon: "📘" },
        { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
        { name: "Vue.js", level: "Advanced", icon: "💚" },
        { name: "Angular", level: "Intermediate", icon: "🅰️" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <CircleStackIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Expert", icon: "🟢" },
        { name: "Python", level: "Advanced", icon: "🐍" },
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
        { name: "GraphQL", level: "Advanced", icon: "◉" },
        { name: "Redis", level: "Intermediate", icon: "🔴" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <SparklesIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "ChatGPT API", level: "Advanced", icon: "🤖" },
        { name: "Claude AI", level: "Advanced", icon: "🧠" },
        { name: "Blackbox AI", level: "Advanced", icon: "⚫" },
        { name: "Bruno API", level: "Intermediate", icon: "🐻" },
        { name: "TensorFlow", level: "Intermediate", icon: "🔥" },
        { name: "OpenAI API", level: "Advanced", icon: "🔮" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: "Advanced", icon: "☁️" },
        { name: "Docker", level: "Advanced", icon: "🐳" },
        { name: "Kubernetes", level: "Intermediate", icon: "⚙️" },
        { name: "Vercel", level: "Expert", icon: "▲" },
        { name: "Firebase", level: "Advanced", icon: "🔥" },
        { name: "Git/GitHub", level: "Expert", icon: "🐙" }
      ]
    },
    {
      title: "Design & UX",
      icon: <PaintBrushIcon className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Figma", level: "Expert", icon: "🎨" },
        { name: "Adobe XD", level: "Advanced", icon: "🎭" },
        { name: "Framer", level: "Advanced", icon: "📐" },
        { name: "Sketch", level: "Intermediate", icon: "💎" },
        { name: "Canva Pro", level: "Advanced", icon: "🖌️" },
        { name: "Photoshop", level: "Intermediate", icon: "🖼️" }
      ]
    },
    {
      title: "Mobile & Cross-Platform",
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "React Native", level: "Advanced", icon: "📱" },
        { name: "Flutter", level: "Intermediate", icon: "🦋" },
        { name: "Expo", level: "Advanced", icon: "⚡" },
        { name: "PWA", level: "Expert", icon: "🌐" },
        { name: "Ionic", level: "Intermediate", icon: "⚡" },
        { name: "Electron", level: "Intermediate", icon: "🖥️" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_50%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 dark:bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-blue-200/50 dark:border-purple-300/30 text-sm font-medium mb-6"
          >
            <CpuChipIcon className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              MCA Graduate • 5+ Years Experience
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills &
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mastering <span className="text-blue-600 dark:text-cyan-400 font-semibold">cutting-edge technologies</span> and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> AI-powered tools</span> to build the future
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group/skill p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover/skill:text-blue-600 dark:group-hover/skill:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ 
                                width: skill.level === 'Expert' ? '100%' : 
                                       skill.level === 'Advanced' ? '85%' : '70%' 
                              }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 cursor-pointer">
            <CommandLineIcon className="w-6 h-6" />
            <span className="font-semibold text-lg">Let's Build Something Amazing Together</span>
            <SparklesIcon className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}