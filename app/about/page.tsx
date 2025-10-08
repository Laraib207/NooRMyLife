// app/about/page.tsx
// import Image from 'next/image'
// import Link from 'next/link'

// export const metadata = {
//   title: 'About — Laraib Siddiqui',
//   description: 'About page for Laraib — Full-Stack Developer & Designer',
// }

// export default function About() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#071226] via-[#081025] to-[#071226] text-slate-100 py-12 px-6 lg:px-24 dark:from-[#071226] dark:via-[#081025] dark:to-[#071226] dark:text-slate-100 light:bg-white light:text-gray-900">
//       {/* Container */}
//       <section className="max-w-7xl mx-auto">
//         {/* Hero / Intro */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* Left card: Photo + quick info */}
//           <aside className="lg:sticky top-24">
//             <div className="rounded-2xl overflow-hidden border border-white/6 bg-white/3 backdrop-blur-md shadow-2xl p-4 dark:border-white/6 dark:bg-white/3 light:border-gray-200 light:bg-gray-50">
//               <div className="relative w-full h-64 rounded-xl overflow-hidden">
//                 {/* Replace with your image at /public/me.jpg */}
//                 <Image
//                   src="/me.jpg"
//                   alt="Laraib Siddiqui"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="object-top"
//                   placeholder="empty"
//                 />
//               </div>

//               <div className="mt-4 text-center">
//                 <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-gray-900">Laraib Siddiqui</h2>
//                 <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Full-Stack Developer & Designer</p>
//               </div>

//               <div className="mt-6 grid grid-cols-3 gap-3 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">24</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">50+</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Projects</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">+2</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years Exp</div>
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-3 justify-center">
//                 <Link href="/resume.pdf" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-medium shadow hover:shadow-lg transition">Resume</Link>
//                 <Link href="/contact" className="px-4 py-2 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition">Contact</Link>
//               </div>

//               <div className="mt-6 text-center text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
//                 <span className="inline-block px-2 py-1 rounded-full bg-white/3 border border-white/6 dark:bg-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">Aurangabad, Bihar</span>
//               </div>
//             </div>

//             {/* Certificates quick links */}
//             <div className="mt-6 grid grid-cols-1 gap-3">
//               <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//                 <div className="w-10 h-10 rounded-md bg-purple-600/80 flex items-center justify-center font-semibold text-white">BCA</div>
//                 <div>
//                   <div className="font-medium text-white dark:text-white light:text-gray-900">BCA Certificate</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2019–2022 — First Class</div>
//                 </div>
//               </a>

//               <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//                 <div className="w-10 h-10 rounded-md bg-cyan-600/80 flex items-center justify-center font-semibold text-white">MCA</div>
//                 <div>
//                   <div className="font-medium text-white dark:text-white light:text-gray-900">MCA Certificate</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2023–2025 — First Class</div>
//                 </div>
//               </a>
//             </div>
//           </aside>

//           {/* Middle & Right: Main content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Head intro */}
//             <header className="rounded-2xl p-6 bg-gradient-to-r from-white/3 to-white/2 border border-white/6 shadow-lg dark:bg-gradient-to-r dark:from-white/3 dark:to-white/2 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white dark:text-white light:text-gray-900">
//                 Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">Laraib Siddiqui</span>
//               </h1>
//               <p className="mt-3 text-lg text-slate-200 dark:text-slate-200 light:text-gray-700 max-w-3xl">
//                 Full-Stack Developer & Designer — crafting beautiful, functional and user-centered digital experiences. I build web apps, interfaces and APIs with performance, accessibility and polish.
//               </p>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">React</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Next.js</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Tailwind</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Node</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">MongoDB</span>
//               </div>
//             </header>

//             {/* Timeline: School -> College -> MCA */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Education Timeline</h2>
//               <div className="mt-6 space-y-6">
//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">High School — Aurangabad</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Completed high schooling in Aurangabad, Bihar</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">—</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">BCA — (2019–2022)</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Bachelor of Computer Applications — First Class. Final project: <em>V-Mart Online Shopping Mall</em> (Role: Frontend)</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">BCA</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">MCA — (2023–2025)</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Master of Computer Applications — First Class. Final project: <em>Asset Tracking System</em> (Role: Full-Stack Developer)</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">MCA</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Certificates & Courses */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Certificates & Courses</h2>
//                 <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Click to open PDFs</div>
//               </div>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">BCA Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA — First Class</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>

//                 <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">MCA Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA — First Class</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>

//                 <a href="/certs/project_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Project Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">V-Mart / Asset Tracking</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>
//               </div>

//               <p className="mt-3 text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
//                 Tip: Drop your certificate PDFs in <code className="bg-white/5 px-1 rounded dark:bg-white/5 light:bg-gray-100">/public/certs/</code> (filenames used above). I can add more cards if you upload more files.
//               </p>
//             </section>

//             {/* Projects & Fun Moments */}
//             <section className="rounded-2xl p-6 bg-gradient-to-r from-white/4 to-white/3 border border-white/6 dark:bg-gradient-to-r dark:from-white/4 dark:to-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Projects & Fun Moments</h2>
//               <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-2">A few highlights from team projects, learning moments and celebrations.</p>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 p-0 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40">
//                     <Image src="/projects/project1.jpg" alt="V-Mart" fill style={{ objectFit: 'cover' }} />
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">V-Mart — Online Shopping Mall</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA final project — Role: Frontend. Team: 6</p>
//                   </div>
//                 </div>

//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40">
//                     <Image src="/projects/project2.jpg" alt="Asset Tracking" fill style={{ objectFit: 'cover' }} />
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Asset Tracking System</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA final project — Role: Full-Stack Dev</p>
//                   </div>
//                 </div>

//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-cyan-500">
//                     <span className="text-xl font-semibold text-black">Fun Moment</span>
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Team Celebrations</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Snapshots of teamwork, coding nights and project demos.</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Skills & Tools */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Skills & Tools</h2>
//                 <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Practical & used daily</div>
//               </div>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Frontend — React / Next.js</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '88%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Backend — Node / Express</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '76%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Databases — MongoDB / SQL</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '72%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Design & Prototyping</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '64%' }} />
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Strengths & Improvements */}
//             <section className="rounded-2xl p-6 bg-white/5 border border-white/6 dark:bg-white/5 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Strengths & Growth</h2>
//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Strengths</h4>
//                   <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
//                     <li>Positive mindset</li>
//                     <li>Problem solving — resolving difficult/“impossible” issues</li>
//                     <li>Persistence — I keep trying until it runs</li>
//                     <li>Quick learner — active on tech channels & tutorials</li>
//                   </ul>
//                 </div>

//                 <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Areas to Improve</h4>
//                   <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
//                     <li>Time management — building structured schedules</li>
//                     <li>Public speaking — practicing by recording tutorials</li>
//                     <li>Polish on advanced system design (working on it)</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Final CTA */}
//             <section className="rounded-2xl p-6 bg-gradient-to-r from-[#0b1220]/40 to-[#081025]/40 border border-white/6 flex items-center justify-between dark:bg-gradient-to-r dark:from-[#0b1220]/40 dark:to-[#081025]/40 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//               <div>
//                 <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900">Want to collaborate or see my full portfolio?</h3>
//                 <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">I’m open for freelance & full-time roles. Let’s build something great.</p>
//               </div>

//               <div className="flex gap-3">
//                 <Link href="/contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-semibold hover:shadow-lg transition">Get in touch</Link>
//                 <a href="/resume.pdf" className="px-5 py-3 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition">Download CV</a>
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  DocumentTextIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  CalendarIcon,
  FolderIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

// Metadata should be handled in layout.tsx or a parent server component

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const skills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Database Management", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 80, color: "from-orange-500 to-red-500" }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            // @ts-ignore
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left: Profile Card */}
          <motion.aside 
            variants={itemVariants}
            className="lg:sticky top-24"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <div className="relative h-80">
                  <Image
                    src="/me.jpg"
                    alt="Laraib Siddiqui"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-top transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status badge */}
                  <div className="absolute top-6 right-6 px-3 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Available for Work
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-center">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      Laraib Siddiqui
                    </motion.h2>
                    <p className="text-cyan-400 font-medium mb-6">Full-Stack Developer & Designer</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">24</div>
                        <div className="text-xs text-slate-400">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-xs text-slate-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">5+</div>
                        <div className="text-xs text-slate-400">Years Exp</div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 mb-6">
                      <Link 
                        href="/resume.pdf" 
                        className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        Resume
                      </Link>
                      <Link 
                        href="/contact" 
                        className="flex-1 px-4 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        Contact
                      </Link>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                      <MapPinIcon className="w-4 h-4" />
                      Aurangabad, Bihar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 space-y-4"
            >
              <a 
                href="/certs/bca_certificate.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="group p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/20 flex items-center gap-4 hover:bg-slate-800/80 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                  BCA
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">BCA Certificate</div>
                  <div className="text-xs text-slate-400">2019–2022 — First Class</div>
                </div>
              </a>

              <a 
                href="/certs/mca_certificate.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="group p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/20 flex items-center gap-4 hover:bg-slate-800/80 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center font-bold text-white shadow-lg">
                  MCA
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">MCA Certificate</div>
                  <div className="text-xs text-slate-400">2023–2025 — First Class</div>
                </div>
              </a>
            </motion.div>
          </motion.aside>

          {/* Right: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Introduction */}
            <motion.header 
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-20 blur-sm" />
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-300/30 text-sm font-medium mb-6"
                >
                  <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400">Full-Stack Developer & Designer</span>
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Laraib Siddiqui
                  </span>
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                  Crafting <span className="text-cyan-400 font-semibold">beautiful</span>, 
                  <span className="text-purple-400 font-semibold"> functional</span> and 
                  <span className="text-pink-400 font-semibold"> user-centered</span> digital experiences. 
                  I build web applications, interfaces and APIs with performance, accessibility and polish.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.header>

            {/* Education Timeline */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education Timeline</h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "High School — Aurangabad",
                    description: "Completed high schooling in Aurangabad, Bihar",
                    period: "—",
                    icon: "🎓"
                  },
                  {
                    title: "BCA — (2019–2022)",
                    description: "Bachelor of Computer Applications — First Class. Final project: V-Mart Online Shopping Mall (Role: Frontend)",
                    period: "BCA",
                    icon: "💻"
                  },
                  {
                    title: "MCA — (2023–2025)",
                    description: "Master of Computer Applications — First Class. Final project: Asset Tracking System (Role: Full-Stack Developer)",
                    period: "MCA",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      {index < 2 && <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-600 mt-4" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Progress */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects Showcase */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <FolderIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "V-Mart Online Shopping Mall",
                    role: "Frontend Developer",
                    team: "Team of 6",
                    image: "/projects/project1.jpg",
                    gradient: "from-blue-500 to-purple-600"
                  },
                  {
                    title: "Asset Tracking System",
                    role: "Full-Stack Developer",
                    team: "Solo Project",
                    image: "/projects/project2.jpg",
                    gradient: "from-green-500 to-cyan-500"
                  },
                  {
                    title: "Portfolio & More",
                    role: "UI/UX Designer",
                    team: "Personal Projects",
                    gradient: "from-pink-500 to-orange-500"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group rounded-2xl overflow-hidden bg-slate-800/60 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className={`relative h-48 ${project.image ? '' : `bg-gradient-to-br ${project.gradient} flex items-center justify-center`}`}>
                      {project.image ? (
                        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                      ) : (
                        <div className="text-4xl">🎨</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-1">{project.role}</p>
                      <p className="text-slate-400 text-xs">{project.team}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Strengths & Growth */}
            <motion.section 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strengths</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Positive mindset & problem-solving approach",
                    "Persistence until solutions are found",
                    "Quick learner with tech enthusiasm",
                    "Strong analytical thinking"
                  ].map((strength, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
                      {strength}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                    <LightBulbIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Growth Areas</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Time management & structured scheduling",
                    "Public speaking & presentation skills",
                    "Advanced system design patterns",
                    "Leadership & team management"
                  ].map((area, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
                      {area}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Final CTA */}
            <motion.section 
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-gradient-to-r from-slate-800/80 to-slate-900/60 backdrop-blur-xl border border-white/20 overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-30 blur-lg" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm open for freelance projects & full-time opportunities. 
                    Let's build something amazing together.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <HeartIcon className="w-5 h-5" />
                    Get in Touch
                  </Link>
                  <a 
                    href="/resume.pdf" 
                    className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <DocumentTextIcon className="w-5 h-5" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}