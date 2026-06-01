import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [activeNav, setActiveNav] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            {'{SH}'}
          </motion.div>

          <div className="flex gap-6 sm:gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-medium transition-colors text-sm sm:text-base ${
                  activeNav === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                {activeNav === item.toLowerCase() && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                    layoutId="underline"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Home Section */}
      <motion.section 
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hello, I am{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Ravan Guliev
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A passionate web developer from Baku, Azerbaijan, specializing in dynamic and responsive websites with modern frameworks like React, Three.js and other cool frameworks. With a keen eye for detail and a drive to learn, I thrive on turning ideas into digital experiences. I love crafting seamless digital experiences with performance and user-friendly design in mind.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
              <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#06b6d4" strokeWidth="2" opacity="0.5"/>
                <circle cx="100" cy="100" r="60" stroke="#0ea5e9" strokeWidth="2" opacity="0.7"/>
                <circle cx="100" cy="100" r="40" stroke="#0284c7" strokeWidth="2"/>
                <rect x="80" y="70" width="40" height="60" fill="#06b6d4" opacity="0.3" rx="4"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a front-end developer with a passion for creating beautiful and functional web applications. With expertise in React, Three.js, and modern web technologies, I build engaging digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and improve my skills. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
              <div className="space-y-3">
                {[
                  { skill: 'React', level: 95 },
                  { skill: 'Three.js', level: 85 },
                  { skill: 'Tailwind CSS', level: 90 },
                  { skill: 'JavaScript', level: 92 },
                  { skill: 'Web Design', level: 88 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-cyan-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            My Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '3D Portfolio',
                desc: 'Interactive 3D portfolio with React Three Fiber',
                tech: ['React', 'Three.js', 'Framer Motion']
              },
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce solution with modern tech',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Chat Application',
                desc: 'Real-time chat app with WebSocket integration',
                tech: ['React', 'Socket.io', 'Express']
              },
              {
                title: 'Task Manager',
                desc: 'Productivity app to manage daily tasks',
                tech: ['React', 'Firebase', 'Tailwind']
              },
              {
                title: 'Weather App',
                desc: 'Real-time weather data with beautiful UI',
                tech: ['React', 'API', 'Charts']
              },
              {
                title: 'Blog Platform',
                desc: 'Full-featured blogging platform',
                tech: ['React', 'Next.js', 'CMS']
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>

          <div className="space-y-4">
            <motion.a
              href="mailto:ravan@example.com"
              className="block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Email Me
            </motion.a>

            <div className="flex gap-4 justify-center mt-8">
              {[
                { icon: '💼', label: 'GitHub', url: 'https://github.com/RavanGuliev' },
                { icon: '🔗', label: 'LinkedIn', url: '#' },
                { icon: '🐦', label: 'Twitter', url: '#' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 border border-cyan-500/30 rounded-full hover:bg-cyan-500/30 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8 px-4 text-center text-gray-400">
        <p>© 2026 Ravan Guliev. All rights reserved.</p>
      </footer>
    </div>
  )
}
