import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const heroImages = [
  'src/assets/images/LIAM.jpg',
  'src/assets/images/LIAM1.jpg',
  'src/assets/images/LIAM2.jpg'
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="text-primary">CREATE</span> WITH PURPOSE
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10">
            I'm Liam Naule, a fullstack developer building digital experiences that matter.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-light transition-colors">
              View Work
            </a>
            <a href="#about" className="px-8 py-3 border-2 border-light text-light font-bold rounded-full hover:bg-light hover:text-dark transition-colors">
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
