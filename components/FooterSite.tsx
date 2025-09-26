'use client'
import Image from 'next/image'

export default function FooterSite(){
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-bold">Laraib</div>
          <p className="mt-4 text-slate-400">Design-led development, focused on performance & clarity.</p>
        </div>

        <div className="flex flex-col">
          <div className="text-sm">Contact</div>
          <div className="mt-4 text-slate-300">123-456-7890<br/>your-email@example.com</div>
        </div>

        <div>
          <div className="text-sm">Subscribe to Our Newsletter</div>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 bg-slate-800 border-b pb-2 focus:outline-none" />
            <button className="px-4 py-2 bg-white text-slate-900 rounded">Submit</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 text-slate-500 py-6 text-center">© {new Date().getFullYear()} Laraib — All rights reserved</div>
    </footer>
  )
}
