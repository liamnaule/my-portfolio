import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8">
              ABOUT <span className="text-primary">ME</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                I'm a fullstack developer with a passion for creating immersive digital experiences that push boundaries.
              </p>
              <p>
                With 5+ years in the industry, I've worked with startups and Fortune 500 companies to build web applications that are both beautiful and functional.
              </p>
              <p>
                My approach combines technical expertise with design thinking to create solutions that users love.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl -z-10" />
            <img 
              src="src/assets/images/LIAM.jpg" 
              alt="Liam Naule" 
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Development", items: ["React", "Node.js", "Python", "Flask"] },
            { title: "Design", items: ["Figma", "Framer", "WebGL", "GSAP"] },
            { title: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-light/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}