'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactSection(){
  const [sent,setSent] = useState(false)
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-sm text-slate-500">Ready to Elevate Your Brand?</p>
          <h3 className="mt-2 text-4xl font-bold">Get in Touch</h3>
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),2200)}} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="First name *" className="border-b pb-2 focus:outline-none" />
              <input required placeholder="Last name *" className="border-b pb-2 focus:outline-none" />
            </div>
            <input required placeholder="Email *" className="w-full border-b pb-2 focus:outline-none" />
            <input placeholder="Phone" className="w-full border-b pb-2 focus:outline-none" />
            <textarea rows={5} placeholder="Message" className="w-full border pb-2 pt-2 focus:outline-none" />
            <button className="px-6 py-3 bg-accent text-white rounded">{sent ? 'Sent ✓' : 'Send Message'}</button>
          </form>
        </div>
        <div className="relative h-96 w-full rounded overflow-hidden">
          <Image src="/images/contact-side.jpg" alt="contact" fill style={{objectFit:'cover'}} />
        </div>
      </div>
    </section>
  )
}
