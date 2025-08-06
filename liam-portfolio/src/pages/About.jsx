import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'

const skills = [
  { name: "Python", level: 90, color: "from-blue-500 to-cyan-400" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-amber-500" },
  { name: "React", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Flask", level: 75, color: "from-gray-400 to-gray-600" },
  { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-cyan-500" },
  { name: "SQL", level: 70, color: "from-purple-400 to-indigo-500" },
]

const experience = [
  {
    role: "Junior Fullstack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Developing and maintaining web applications using React and Flask. Collaborating with cross-functional teams to deliver high-quality software solutions."
  },
  {
    role: "Web Development Intern",
    company: "Digital Solutions LLC",
    period: "2021 - 2022",
    description: "Assisted in building responsive websites and web applications. Gained experience with modern JavaScript frameworks and REST APIs."
  }
]

const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University of Technology",
    period: "2018 - 2022",
    description: "Specialized in software engineering and web technologies. Graduated with honors."
  }
]

export default function About({ darkMode }) {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate fullstack developer with expertise in building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-white">Who I Am</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Hello! I'm Liam Naule, a junior fullstack developer specializing in Python and JavaScript ecosystems. 
                  I have a passion for creating beautiful, functional, and user-centered digital experiences.
                </p>
                <p>
                  With a strong foundation in computer science and hands-on experience in modern web technologies, 
                  I approach problems with both technical expertise and creative thinking.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or enjoying outdoor activities to keep a fresh perspective.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassCard className="h-full">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <img 
                  src="src/assets/images/LIAM.jpg" 
                  alt="Liam Naule" 
                  className="relative rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-white">Liam Naule</h4>
                <p className="text-gray-400">Fullstack Developer</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-white">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-teal-500 pl-4">
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <GlassCard>
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution} • {edu.period}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}