import { motion } from 'framer-motion'

export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Ev' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'Haqqımda' },
    { id: 'contact', label: 'Əlaqə' }
  ]

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          whileHover={{ scale: 1.05 }}
        >
          RG Portfolio
        </motion.div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-3 py-2 font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-purple-300'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
