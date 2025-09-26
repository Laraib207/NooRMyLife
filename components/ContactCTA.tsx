import Link from 'next/link'

export default function ContactCTA() {
  return (
    <div className="rounded-xl p-8 bg-gradient-to-r from-indigo-50 to-white border">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Want to build something together?</h3>
          <p className="text-slate-600 mt-2">I’m available for freelance work and collaborations. Let’s talk.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="px-5 py-3 bg-accent text-white rounded-md">Get in touch</Link>
          <a href="/resume.pdf" className="px-5 py-3 border rounded-md">Download CV</a>
        </div>
      </div>
    </div>
  )
}


