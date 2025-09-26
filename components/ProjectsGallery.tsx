'use client'
import Image from 'next/image'

const projects = [
  { src:'/images/project-1.jpg', title:'Retail platform' },
  { src:'/images/project-2.jpg', title:'SaaS dashboard' },
  { src:'/images/project-3.jpg', title:'Marketplace UX' },
]

export default function ProjectsGallery(){
  return (
    <section className="py-12 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-slate-300">Showcasing Custom Solutions</p>
        <h3 className="mt-4 text-4xl font-bold">Our Projects</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p,i)=>(
            <div key={i} className="relative overflow-hidden rounded">
              <Image src={p.src} alt={p.title} width={1200} height={800} className="object-cover w-full h-72 md:h-96" />
              <div className="absolute left-6 bottom-6 bg-black/60 text-white px-3 py-2 rounded">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
