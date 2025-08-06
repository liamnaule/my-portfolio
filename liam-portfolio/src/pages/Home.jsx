import { useEffect } from 'react'
import GlassCard from '../components/GlassCard'
import ContactSphere from '../components/ContactSphere'

export default function Home({ darkMode }) {
  useEffect(() => {
    document.title = "Liam Naule | Fullstack Developer"
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[url('./assets/images/abstract-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="max-w-6xl mx-auto z-10">
          <GlassCard>
            <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
              LIAM NAULE
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
              JUNIOR FULLSTACK DEVELOPER
            </h2>
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-4 py-2 rounded-full bg-cyan-900/30 text-cyan-300 backdrop-blur-sm">PYTHON</span>
              <span className="px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 backdrop-blur-sm">JAVASCRIPT</span>
              <span className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 backdrop-blur-sm">REACT</span>
              <span className="px-4 py-2 rounded-full bg-emerald-900/30 text-emerald-300 backdrop-blur-sm">FLASK</span>
            </div>
          </GlassCard>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80">
        <GlassCard>
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            ABOUT ME
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Passionate junior fullstack developer specializing in Python and JavaScript ecosystems. 
                I build modern web applications with React frontends and Flask backends.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My approach combines clean code aesthetics with cutting-edge technologies 
                to create performant and visually stunning applications.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  View Projects
                </button>
                <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all">
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <img 
                src="src/assets/images/LIAM.jpg" 
                alt="Liam Naule" 
                className="relative rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[url('./assets/images/contact-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            GET IN TOUCH
          </h2>
          <ContactSphere />
        </div>
      </section>
    </div>
  )
}