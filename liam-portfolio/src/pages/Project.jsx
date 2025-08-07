import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const projects = [
  {
    title: "Neon Dreams",
    description: "Interactive art installation using WebGL",
    tags: ["Three.js", "React", "GSAP"],
    image: "/assets/images/project1.jpg"
  },
  {
    title: "Quantum Dashboard",
    description: "Data visualization platform for quantum computing",
    tags: ["Python", "D3.js", "Flask"],
    image: "/assets/images/project2.jpg"
  },
  {
    title: "Pixel Nexus",
    description: "E-commerce platform for digital artists",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "/assets/images/project3.jpg"
  }
]

export default function Projects() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-16"
        >
          SELECTED <span className="text-primary">WORK</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="project-overlay">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-light mb-2">{project.title}</h3>
                    <p className="text-light mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}