import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Fullstack e-commerce solution with React frontend and Flask backend. Features product catalog, cart system, and Stripe integration.",
    technologies: ["React", "Flask", "Tailwind CSS", "Stripe API"],
    image: "/assets/images/project-1.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task manager with drag-and-drop interface and team management features.",
    technologies: ["React", "Firebase", "Framer Motion", "React DnD"],
    image: "/assets/images/project-2.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Web application that generates custom artwork using machine learning models with user-provided prompts.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    image: "/assets/images/project-3.jpg",
    link: "#",
    github: "#"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Projects({ darkMode }) {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my featured works. Each project showcases different aspects of my fullstack development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.link} 
                        className="px-3 py-1 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-colors"
          >
            Visit My GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}