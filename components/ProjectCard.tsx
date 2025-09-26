import Link from 'next/link'

export default function ProjectCard({ project }: any) {
  return (
    <article className="border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
      <Link href={`/work/${project.slug}`}>
        <img src={project.cover} alt={project.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform" />
        <div className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-slate-600 text-sm mt-1">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t:string)=> <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
          </div>
        </div>
      </Link>
    </article>
  )
}
