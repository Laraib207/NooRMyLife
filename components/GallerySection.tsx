
'use client'
export default function GallerySection(){
  const imgs = ['/images/project-1.jpg','/images/project-2.jpg','/images/project-3.jpg','/images/project-4.jpg','/images/project-5.jpg','/images/project-6.jpg']
  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6">Image Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src,i)=> (
            <div key={i} className="h-48 overflow-hidden rounded-lg shadow-sm">
              <img src={src} alt={`gallery-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
