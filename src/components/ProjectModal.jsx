import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 sm:p-12">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full text-cyan-400 text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          {/* Project Icon */}
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.icon}
          </motion.div>

          {/* Project Title */}
          <motion.h2
            className="text-4xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>

          {/* Project Description */}
          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.fullDescription || project.desc}
          </motion.p>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">🛠️ Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/50 font-semibold"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.3)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">✨ Key Features</h3>
            <ul className="space-y-3">
              {(project.features || []).map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-cyan-400 text-xl mt-1">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mb-8"
          >
            <motion.a
              href="#"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-lg text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
            <motion.a
              href="#"
              className="flex-1 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg text-center hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20"
          >
            <h3 className="text-lg font-bold text-white mb-4">💬 Interested in this project?</h3>
            <ProjectContactForm projectTitle={project.title} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectContactForm({ projectTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', {
      ...formData,
      project: projectTitle
    })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-400 font-semibold">Message sent successfully!</p>
        <p className="text-gray-400 text-sm mt-2">I'll get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <textarea
          name="message"
          placeholder="Your Message about this project..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Send Message
      </motion.button>
    </form>
  )
}
