
'use client'
export default function NewsletterCTA(){
  return (
    <section id="newsletter" className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-3">Stay updated</h3>
        <p className="text-sm text-slate-600 mb-4">Join my newsletter to get new projects and case studies.</p>
        <form className="flex items-center justify-center gap-3">
          <input type="email" placeholder="Your email" className="px-4 py-2 border rounded-md w-64" />
          <button className="px-4 py-2 bg-rose-600 text-white rounded-md">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
