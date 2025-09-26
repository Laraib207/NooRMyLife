
'use client'
export default function SkillsSection(){
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6">Skills & Tools</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Expertise across design and frontend engineering.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Next.js','React','TypeScript','Tailwind','Figma','Node.js','Git','GraphQL'].map(s => (
            <div key={s} className="p-4 bg-white/60 dark:bg-slate-800 rounded-lg shadow-sm">
              <h3 className="font-semibold">{s}</h3>
              <p className="text-xs text-slate-500 mt-1">Pro-level</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
