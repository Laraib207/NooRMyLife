// import Link from 'next/link'

// export default function ProjectCard({ project }: any) {
//   return (
//     <article className="border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
//       <Link href={`/work/${project.slug}`}>
//         <img src={project.cover} alt={project.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform" />
//         <div className="p-4">
//           <h3 className="font-semibold">{project.title}</h3>
//           <p className="text-slate-600 text-sm mt-1">{project.description}</p>
//           <div className="mt-3 flex flex-wrap gap-2">
//             {project.tags.map((t:string)=> <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
//           </div>
//         </div>
//       </Link>
//     </article>
//   )
// }






'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function ProjectCard({ project }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden bg-slate-800">
          <img 
            src={project.cover} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* View Project Button - Appears on Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-2">
              <span>View Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.div>
        </div>


        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
            {project.title}
          </h3>


          {/* Description */}
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            {project.description}
          </p>


          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, index: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-indigo-400/50 hover:text-indigo-300 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>


          {/* Bottom Icon/Arrow */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm text-slate-500 group-hover:text-indigo-400 transition-colors">
              Case Study
            </span>
            <svg 
              className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>


        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </Link>
    </motion.article>
  )
}
