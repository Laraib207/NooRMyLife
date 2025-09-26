'use client'
export default function Testimonials(){
  const items = [
    { name:'Sarah Johnson', role:'CMO of Roon', text:"A. Rodriguez’s custom solutions revolutionized our online presence..." },
    { name:'Hannah Green', role:'Director of Vailu', text:'Our online engagement tripled with their help...' }
  ]
  return (
    <section className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-slate-300">Client Feedback</p>
        <h3 className="mt-4 text-4xl font-bold">Success Stories</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="p-8 bg-slate-900/70 rounded">
              <div className="font-medium text-lg">{it.name}</div>
              <div className="text-sm text-slate-400">{it.role}</div>
              <p className="mt-4 text-slate-200">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
