import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="w-full bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-cyan-400 rounded-full pointer-events-none -z-10 mix-blend-screen blur-xl"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 140 }}
      />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {'{RG}'}
          </motion.div>

          <div className="flex gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-bold transition-colors text-sm sm:text-base group ${
                  activeNav === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: activeNav === item.toLowerCase() ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Home Section */}
      <motion.section 
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 border border-cyan-500/30 rounded-lg"
          animate={{
            rotate: 360,
            y: [0, 20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-24 h-24 border border-blue-500/30 rounded-full"
          animate={{
            rotate: -360,
            x: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            x: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 font-semibold text-sm">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                Ravan Guliev
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A creative developer crafting stunning web experiences with React, Three.js, and modern web technologies. I turn your ideas into interactive digital reality.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              className="relative w-80 h-80"
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl border border-cyan-500/50 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1), transparent 50%)',
                      'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1), transparent 50%)',
                      'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1), transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="relative z-10 text-6xl">💻</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20 px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">🎯 Who am I?</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate front-end developer from Baku, Azerbaijan, dedicated to creating beautiful, performant, and user-friendly web applications. With deep expertise in React and Three.js, I specialize in building immersive digital experiences.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">🚀 What I Do</h3>
                <p className="text-gray-300 leading-relaxed">
                  I craft responsive websites, interactive 3D experiences, and scalable applications using cutting-edge web technologies. Every project is an opportunity to push creative boundaries and solve complex problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6">💪 My Skills</h3>
              {[
                { skill: 'React & Next.js', level: 95 },
                { skill: 'Three.js & WebGL', level: 90 },
                { skill: 'Tailwind CSS', level: 95 },
                { skill: 'JavaScript/TypeScript', level: 92 },
                { skill: 'Framer Motion', level: 88 },
                { skill: 'Web Design & UI/UX', level: 90 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{item.skill}</span>
                    <span className="text-cyan-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: '3D Portfolio',
                desc: 'Interactive 3D portfolio experience with React Three Fiber and Framer Motion',
                tech: ['React', 'Three.js', 'Framer Motion'],
                icon: '🎨',
                gradient: 'from-cyan-400 to-blue-600'
              },
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce solution with real-time inventory management',
                tech: ['React', 'Node.js', 'MongoDB'],
                icon: '🛍️',
                gradient: 'from-blue-400 to-purple-600'
              },
              {
                title: 'Real-time Chat App',
                desc: 'Live chat application with WebSocket integration and user authentication',
                tech: ['React', 'Socket.io', 'Express'],
                icon: '💬',
                gradient: 'from-purple-400 to-pink-600'
              },
              {
                title: 'AI Task Manager',
                desc: 'Smart task management with AI-powered suggestions and analytics',
                tech: ['React', 'Firebase', 'AI/ML'],
                icon: '✅',
                gradient: 'from-green-400 to-cyan-600'
              },
              {
                title: 'Weather Visualizer',
                desc: 'Beautiful weather dashboard with animated 3D weather patterns',
                tech: ['React', 'API', 'Three.js'],
                icon: '🌦️',
                gradient: 'from-orange-400 to-red-600'
              },
              {
                title: 'Creative Blog',
                desc: 'Modern blogging platform with rich content and beautiful animations',
                tech: ['Next.js', 'CMS', 'Tailwind'],
                icon: '📝',
                gradient: 'from-pink-400 to-rose-600'
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${project.gradient} p-0.5 rounded-2xl cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                <div className="relative bg-slate-950 rounded-2xl p-8 h-full flex flex-col">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/50 group-hover:border-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1), transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1), transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.1), transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-3xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Let's Create Something Amazing
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I'm always interested in hearing about new projects. Let's talk about your ideas!
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.a
              href="mailto:ravan@example.com"
              className="block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Send Me an Email
            </motion.a>

            <motion.div
              className="flex gap-4 justify-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: '💼', label: 'GitHub', url: 'https://github.com/RavanGuliev', color: 'from-slate-400 to-slate-600' },
                { icon: '🔗', label: 'LinkedIn', url: '#', color: 'from-blue-400 to-blue-600' },
                { icon: '🐦', label: 'Twitter', url: '#', color: 'from-cyan-400 to-blue-600' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${social.color} rounded-full shadow-lg hover:shadow-2xl transition-all text-2xl`}
                  whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-950/50 border-t border-cyan-500/20 py-12 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-gray-400 mb-4">© 2026 Ravan Guliev. Crafted with ❤️ and code</p>
          <motion.p
            className="text-cyan-400/60 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Always learning, always creating...
          </motion.p>
        </motion.div>
      </footer>
    </div>
  )
}
