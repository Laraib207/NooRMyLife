import { projects } from '../../../data/projects'

export default function ProjectPage({ params }: any) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return <div className="pt-12">Project not found</div>
  return (
    <section className="pt-12 pb-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-slate-600 mt-2">{project.description}</p>
      <img src={project.cover} alt={project.title} className="mt-6 rounded-lg shadow" />
    </section>
  )
}
