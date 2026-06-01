import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// Custom SVG icons for skills that don't have devicons
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
  </svg>
)
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3c-2.5 3.5-3 5.5-3 9s.5 5.5 3 9M12 3c2.5 3.5 3 5.5 3 9s-.5 5.5-3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 10h16M4 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="19" cy="17" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M19 14.5v-1M19 19.5v1M21.5 17H23M15 17h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectImgErrors, setProjectImgErrors] = useState({})

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId)
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  // ── DATA ──────────────────────────────────────────────────────────────────

  const hardSkills = [
    { name: 'HTML',             logo: `${DEVICON}/html5/html5-original.svg` },
    { name: 'CSS',              logo: `${DEVICON}/css3/css3-original.svg` },
    { name: 'JavaScript',       logo: `${DEVICON}/javascript/javascript-original.svg` },
    { name: 'React.js',         logo: `${DEVICON}/react/react-original.svg` },
    { name: 'Next.js',          logo: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
    { name: 'Rest API',         svgIcon: 'api' },
    { name: 'Bootstrap',        logo: `${DEVICON}/bootstrap/bootstrap-original.svg` },
    { name: 'Core PHP',         logo: `${DEVICON}/php/php-original.svg` },
    { name: 'MySQL',            logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'Tailwindcss',      logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    { name: 'Material UI',      logo: `${DEVICON}/materialui/materialui-original.svg` },
    { name: 'GitHub',           logo: `${DEVICON}/github/github-original.svg`, invert: true },
    { name: 'cPanel',           logo: `${DEVICON}/cpanel/cpanel-original.svg` },
    { name: 'Figma',            logo: `${DEVICON}/figma/figma-original.svg` },
    { name: 'Google Console',   logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    { name: 'Laravel',          logo: `${DEVICON}/laravel/laravel-original.svg` },
    { name: 'Hosting & Domain', svgIcon: 'globe' },
    { name: 'Auth & Auth',      svgIcon: 'lock' },
  ]

  const softSkills = [
    'Project Management', 'Public Relations', 'Teamwork',
    'Time Management', 'Leadership', 'Effective Communication', 'Critical Thinking',
  ]

  const experiences = [
    {
      company: 'Div Academy',
      role: 'Front End Mentor',
      year: '2025',
      gradient: 'from-cyan-400 to-blue-600',
      tasks: [
        'Mentored students in HTML, CSS, JavaScript, and React',
        'Reviewed code and provided technical feedback',
        'Guided students through real-world frontend projects',
        'Explained best practices and clean code principles',
      ],
    },
    {
      company: 'Okemedia',
      role: 'Frontend Developer Intern',
      year: '2025',
      gradient: 'from-blue-400 to-purple-600',
      tasks: [
        'Assisted in developing user interfaces using HTML, CSS, and JavaScript',
        'Supported improvement of existing web pages from a UI/UX perspective',
        'Used Git/GitHub for version control and teamwork',
        'Collaborated on real-world projects',
      ],
    },
    {
      company: 'Lider Development',
      role: 'Backend Developer',
      year: '2026',
      gradient: 'from-purple-400 to-pink-600',
      tasks: [
        'Assisted in backend development using Laravel and PHP',
        'Developed and integrated RESTful APIs',
        'Managed databases and implemented CRUD operations',
        'Optimized server-side logic and application performance',
        'Collaborated with frontend developers for seamless integration',
      ],
    },
  ]

  const projects = [
    {
      key: 'goaf',
      title: 'Goaf AZ',
      desc: 'Online gaming marketplace / gaming top-up website.',
      tech: ['React', 'Next.js', 'Laravel'],
      gradient: 'from-cyan-400 to-blue-600',
      image: '/projects/goaf.jpg',
    },
    {
      key: 'umud',
      title: 'Umud Rs',
      desc: 'Corporate Website built with modern technologies.',
      tech: ['HTML', 'CSS', 'PHP'],
      gradient: 'from-blue-400 to-purple-600',
      image: '/projects/umud.jpg',
    },
    {
      key: 'caffecino',
      title: 'CAFFECINO AZ',
      desc: 'Coffee Shop Website with elegant UI and menu display.',
      tech: ['React', 'Tailwindcss', 'Laravel'],
      gradient: 'from-amber-400 to-orange-600',
      image: '/projects/caffecino.jpg',
    },
    {
      key: 'superfon',
      title: 'SUPERFON',
      desc: 'E-commerce Website for electronics and gadgets.',
      tech: ['Next.js', 'MySQL', 'Rest API'],
      gradient: 'from-green-400 to-cyan-600',
      image: '/projects/superfon.jpg',
    },
    {
      key: 'parkcinema',
      title: 'PARK CINEMA',
      desc: 'Cinema Ticketing & Event Platform with seat booking system.',
      tech: ['React', 'Laravel', 'MySQL'],
      gradient: 'from-red-400 to-pink-600',
      image: '/projects/parkcinema.jpg',
    },
    {
      key: 'sitequanta',
      title: 'SITE QUANTA',
      desc: 'Corporate Website with modern design and animations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-violet-400 to-purple-600',
      image: '/projects/sitequanta.jpg',
    },
    {
      key: 'dolphgame',
      title: 'DolphGame',
      desc: 'Online gaming marketplace / gaming top-up website.',
      tech: ['React', 'Next.js', 'Laravel'],
      gradient: 'from-teal-400 to-blue-600',
      image: '/projects/dolphgame.jpg',
    },
  ]

  // ── RENDER ────────────────────────────────────────────────────────────────

  return (
    <div className="w-full bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-cyan-400 rounded-full pointer-events-none -z-10 mix-blend-screen blur-xl"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 140 }}
      />

      {/* ======================== NAVIGATION ======================== */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            {'{RG}'}
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-5 lg:gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-bold transition-colors text-sm group ${
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

          {/* Mobile Burger Button */}
          <motion.button
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-full h-0.5 bg-cyan-400 rounded-full origin-center"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-full h-0.5 bg-cyan-400 rounded-full"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-full h-0.5 bg-cyan-400 rounded-full origin-center"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`text-left px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                      activeNav === item.toLowerCase()
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-cyan-300 hover:bg-slate-800/50'
                    }`}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ======================== HOME SECTION ======================== */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-24 right-10 w-32 h-32 border border-cyan-500/20 rounded-lg hidden sm:block"
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-20 h-20 border border-blue-500/20 rounded-full hidden sm:block"
          animate={{ rotate: -360, x: [0, 15, 0] }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            x: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10 w-full">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 font-semibold text-sm">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Ravan Guliyev
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-cyan-400 font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Fullstack Developer
            </motion.p>

            <motion.p
              className="text-base text-gray-400 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I am a front-end focused full-stack developer specializing in modern web technologies.
              I enjoy building clean, scalable code and designing modern user interfaces while also
              working on backend systems and APIs.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all text-sm"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>

              {/* ── VIEW CV BUTTON ── */}
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View CV
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-cyan-400/60 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition-all text-sm"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── Right: PHOTO ── */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex justify-center items-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-20 animate-pulse" />
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Gradient border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />

              {/* YOUR PHOTO — put me.jpg in /public/ */}
              <img
                id="hero-photo"
                src="/me.jpg"
                alt="Ravan Guliyev"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-slate-950 shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none'
                  document.getElementById('hero-photo-fallback').style.display = 'flex'
                }}
              />

              {/* Fallback shown if /public/me.jpg not found */}
              <div
                id="hero-photo-fallback"
                style={{ display: 'none' }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-slate-950 bg-slate-900 items-center justify-center flex-col gap-2"
              >
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">RG</span>
                <span className="text-gray-500 text-xs">Add me.jpg to /public/</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ======================== ABOUT SECTION ======================== */}
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
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🎯 Profile</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  I am a front-end focused full-stack developer specializing in modern web technologies.
                  I enjoy building clean, scalable code and designing modern user interfaces while also
                  working on backend systems and APIs. I continuously learn new tools and technologies
                  to improve my skills and build high-performance web applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">📞 Contact</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { icon: '📱', text: '+994 051 653 02 02' },
                    { icon: '📧', text: 'ghullievrevan@gmail.com' },
                    { icon: '💼', text: 'ravanguliev' },
                    { icon: '🐙', text: 'RavanGuliev' },
                  ].map((c, i) => (
                    <p key={i} className="text-gray-300">{c.icon} {c.text}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🌍 Languages</h3>
                <div className="space-y-2">
                  {[
                    { lang: 'Azerbaijani', level: 'Native' },
                    { lang: 'English', level: 'Intermediate' },
                    { lang: 'Turkish', level: 'Fluent' },
                    { lang: 'Russian', level: 'Basic' },
                  ].map((l, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{l.lang}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {l.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">🎓 Education</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/60 border border-cyan-500/20 rounded-xl">
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <span className="text-white font-bold text-sm">Azerbaijan University of Architecture and Construction</span>
                      <span className="text-cyan-400 text-xs whitespace-nowrap">2023–2027</span>
                    </div>
                    <span className="text-gray-400 text-xs">Reclamation Engineering</span>
                  </div>
                  <div className="p-4 bg-slate-900/60 border border-blue-500/20 rounded-xl">
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <span className="text-white font-bold text-sm">Div Academy</span>
                      <span className="text-cyan-400 text-xs whitespace-nowrap">2024–2025</span>
                    </div>
                    <span className="text-gray-400 text-xs">Full Stack Developer</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">🤝 Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ======================== SKILLS SECTION ======================== */}
      <motion.section
        id="skills"
        className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4">Technologies & tools I work with</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hardSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-slate-900/80 border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default hover:border-cyan-400/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />

                {/* Logo or SVG */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {skill.svgIcon === 'lock' ? (
                    <LockIcon />
                  ) : skill.svgIcon === 'globe' ? (
                    <GlobeIcon />
                  ) : skill.svgIcon === 'api' ? (
                    <ApiIcon />
                  ) : (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`w-10 h-10 object-contain ${skill.invert ? 'brightness-0 invert' : ''}`}
                      loading="lazy"
                    />
                  )}
                </div>

                <span className="text-xs font-semibold text-gray-300 text-center leading-tight group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ======================== EXPERIENCE SECTION ======================== */}
      <motion.section
        id="experience"
        className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4">My professional journey</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[1.85rem] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} hidden md:flex items-center justify-center shadow-lg text-xs`}>
                    {idx === 0 ? '🎓' : idx === 1 ? '💻' : '⚙️'}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="relative bg-slate-900/80 border border-white/5 rounded-2xl p-5 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                        <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>
                          {exp.role}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30 font-bold">
                        {exp.year}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.tasks.map((task, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0 text-xs">▸</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ======================== PROJECTS SECTION ======================== */}
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
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4">Real-world projects I've built</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${project.gradient} p-px rounded-2xl cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                <div className="relative bg-slate-950 rounded-2xl overflow-hidden h-full flex flex-col">

                  {/* ── Project Image ── */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    {!projectImgErrors[project.key] ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() =>
                          setProjectImgErrors((prev) => ({ ...prev, [project.key]: true }))
                        }
                      />
                    ) : (
                      /* Gradient placeholder shown if image not found */
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-30 flex items-center justify-center`}>
                        <span className="text-white/40 text-xs font-medium">Add image to /public/projects/{project.key}.jpg</span>
                      </div>
                    )}
                    {/* overlay gradient on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  </div>

                  {/* ── Project Info ── */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/15 text-cyan-300 rounded-full text-xs border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ======================== CONTACT SECTION ======================== */}
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
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.08), transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08), transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.08), transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-2xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.p
            className="text-gray-300 mb-10"
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
              href="mailto:ghullievrevan@gmail.com"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ghullievrevan@gmail.com
            </motion.a>

            <motion.a
              href="tel:+994051653 0202"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 border-2 border-cyan-400/60 text-cyan-400 font-bold text-base rounded-xl hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +994 051 653 02 02
            </motion.a>

            <motion.div
              className="flex gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: 'GitHub',   url: 'https://github.com/RavanGuliev', color: 'from-slate-600 to-slate-800' },
                { label: 'LinkedIn', url: '#',                              color: 'from-blue-600 to-blue-800'  },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-br ${social.color} rounded-full shadow-lg text-white font-bold text-sm`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-950/60 border-t border-cyan-500/10 py-10 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-gray-500 mb-3 text-sm">© 2026 Ravan Guliyev. Crafted with ❤️ and code</p>
          <motion.p
            className="text-cyan-400/40 text-xs"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Always learning, always creating...
          </motion.p>
        </motion.div>
      </footer>
    </div>
  )
}
