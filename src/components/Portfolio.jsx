import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: '3D Portfolio Site',
      description: 'React, Three.js və Framer Motion istifadə edərək yaranan 3D portfolio saytı',
      tech: ['React', 'Three.js', 'Framer Motion'],
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Tam funksional e-commerce platforması',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: 'from-blue-400 to-cyan-600'
    },
    {
      id: 3,
      title: 'Chat Application',
      description: 'Real-time chat aplikasiyası WebSocket ilə',
      tech: ['React', 'Socket.io', 'Express'],
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Tapşırıqları idarə etmə üçün veb aplikasiyası',
      tech: ['React', 'Firebase', 'Tailwind'],
      color: 'from-yellow-400 to-orange-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <div className="w-full min-h-screen pt-20 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Layihələr
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${project.color} p-0.5 rounded-xl overflow-hidden group cursor-pointer`}
            >
              <div className="bg-gray-900 p-8 h-full rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bütün Layihələri Göstər
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
