// app/about/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About — Laraib Siddiqui',
  description: 'About page for Laraib — Full-Stack Developer & Designer',
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071226] via-[#081025] to-[#071226] text-slate-100 py-12 px-6 lg:px-24 dark:from-[#071226] dark:via-[#081025] dark:to-[#071226] dark:text-slate-100 light:bg-white light:text-gray-900">
      {/* Container */}
      <section className="max-w-7xl mx-auto">
        {/* Hero / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left card: Photo + quick info */}
          <aside className="lg:sticky top-24">
            <div className="rounded-2xl overflow-hidden border border-white/6 bg-white/3 backdrop-blur-md shadow-2xl p-4 dark:border-white/6 dark:bg-white/3 light:border-gray-200 light:bg-gray-50">
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                {/* Replace with your image at /public/me.jpg */}
                <Image
                  src="/me.jpg"
                  alt="Laraib Siddiqui"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-top"
                  placeholder="empty"
                />
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-gray-900">Laraib Siddiqui</h2>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Full-Stack Developer & Designer</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">24</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">50+</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">+2</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years Exp</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3 justify-center">
                <Link href="/resume.pdf" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-medium shadow hover:shadow-lg transition">Resume</Link>
                <Link href="/contact" className="px-4 py-2 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition">Contact</Link>
              </div>

              <div className="mt-6 text-center text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
                <span className="inline-block px-2 py-1 rounded-full bg-white/3 border border-white/6 dark:bg-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">Aurangabad, Bihar</span>
              </div>
            </div>

            {/* Certificates quick links */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
                <div className="w-10 h-10 rounded-md bg-purple-600/80 flex items-center justify-center font-semibold text-white">BCA</div>
                <div>
                  <div className="font-medium text-white dark:text-white light:text-gray-900">BCA Certificate</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2019–2022 — First Class</div>
                </div>
              </a>

              <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
                <div className="w-10 h-10 rounded-md bg-cyan-600/80 flex items-center justify-center font-semibold text-white">MCA</div>
                <div>
                  <div className="font-medium text-white dark:text-white light:text-gray-900">MCA Certificate</div>
                  <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2023–2025 — First Class</div>
                </div>
              </a>
            </div>
          </aside>

          {/* Middle & Right: Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Head intro */}
            <header className="rounded-2xl p-6 bg-gradient-to-r from-white/3 to-white/2 border border-white/6 shadow-lg dark:bg-gradient-to-r dark:from-white/3 dark:to-white/2 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white dark:text-white light:text-gray-900">
                Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">Laraib Siddiqui</span>
              </h1>
              <p className="mt-3 text-lg text-slate-200 dark:text-slate-200 light:text-gray-700 max-w-3xl">
                Full-Stack Developer & Designer — crafting beautiful, functional and user-centered digital experiences. I build web apps, interfaces and APIs with performance, accessibility and polish.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">React</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Next.js</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Tailwind</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Node</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">MongoDB</span>
              </div>
            </header>

            {/* Timeline: School -> College -> MCA */}
            <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
              <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Education Timeline</h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-2.5">
                    <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white dark:text-white light:text-gray-900">High School — Aurangabad</h3>
                        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Completed high schooling in Aurangabad, Bihar</p>
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">—</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2.5">
                    <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white dark:text-white light:text-gray-900">BCA — (2019–2022)</h3>
                        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Bachelor of Computer Applications — First Class. Final project: <em>V-Mart Online Shopping Mall</em> (Role: Frontend)</p>
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">BCA</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2.5">
                    <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white dark:text-white light:text-gray-900">MCA — (2023–2025)</h3>
                        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Master of Computer Applications — First Class. Final project: <em>Asset Tracking System</em> (Role: Full-Stack Developer)</p>
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">MCA</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certificates & Courses */}
            <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Certificates & Courses</h2>
                <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Click to open PDFs</div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white dark:text-white light:text-gray-900">BCA Certificate</h4>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA — First Class</p>
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
                  </div>
                </a>

                <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white dark:text-white light:text-gray-900">MCA Certificate</h4>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA — First Class</p>
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
                  </div>
                </a>

                <a href="/certs/project_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Project Certificate</h4>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">V-Mart / Asset Tracking</p>
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
                  </div>
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
                Tip: Drop your certificate PDFs in <code className="bg-white/5 px-1 rounded dark:bg-white/5 light:bg-gray-100">/public/certs/</code> (filenames used above). I can add more cards if you upload more files.
              </p>
            </section>

            {/* Projects & Fun Moments */}
            <section className="rounded-2xl p-6 bg-gradient-to-r from-white/4 to-white/3 border border-white/6 dark:bg-gradient-to-r dark:from-white/4 dark:to-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
              <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Projects & Fun Moments</h2>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-2">A few highlights from team projects, learning moments and celebrations.</p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 p-0 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
                  <div className="relative h-40">
                    <Image src="/projects/project1.jpg" alt="V-Mart" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900">V-Mart — Online Shopping Mall</h3>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA final project — Role: Frontend. Team: 6</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
                  <div className="relative h-40">
                    <Image src="/projects/project2.jpg" alt="Asset Tracking" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Asset Tracking System</h3>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA final project — Role: Full-Stack Dev</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
                  <div className="relative h-40 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-cyan-500">
                    <span className="text-xl font-semibold text-black">Fun Moment</span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Team Celebrations</h3>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Snapshots of teamwork, coding nights and project demos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills & Tools */}
            <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Skills & Tools</h2>
                <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Practical & used daily</div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white dark:text-white light:text-gray-700">Frontend — React / Next.js</label>
                  <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
                    <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '88%' }} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white dark:text-white light:text-gray-700">Backend — Node / Express</label>
                  <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
                    <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '76%' }} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white dark:text-white light:text-gray-700">Databases — MongoDB / SQL</label>
                  <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
                    <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '72%' }} />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white dark:text-white light:text-gray-700">Design & Prototyping</label>
                  <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
                    <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '64%' }} />
                  </div>
                </div>
              </div>
            </section>

            {/* Strengths & Improvements */}
            <section className="rounded-2xl p-6 bg-white/5 border border-white/6 dark:bg-white/5 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
              <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Strengths & Growth</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Strengths</h4>
                  <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
                    <li>Positive mindset</li>
                    <li>Problem solving — resolving difficult/“impossible” issues</li>
                    <li>Persistence — I keep trying until it runs</li>
                    <li>Quick learner — active on tech channels & tutorials</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Areas to Improve</h4>
                  <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
                    <li>Time management — building structured schedules</li>
                    <li>Public speaking — practicing by recording tutorials</li>
                    <li>Polish on advanced system design (working on it)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-2xl p-6 bg-gradient-to-r from-[#0b1220]/40 to-[#081025]/40 border border-white/6 flex items-center justify-between dark:bg-gradient-to-r dark:from-[#0b1220]/40 dark:to-[#081025]/40 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900">Want to collaborate or see my full portfolio?</h3>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">I’m open for freelance & full-time roles. Let’s build something great.</p>
              </div>

              <div className="flex gap-3">
                <Link href="/contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-semibold hover:shadow-lg transition">Get in touch</Link>
                <a href="/resume.pdf" className="px-5 py-3 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition">Download CV</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
