import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Scene from './components/Scene'
import Portfolio from './components/Portfolio'
import Navigation from './components/Navigation'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <div className="w-full h-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-purple-300 animate-bounce">↓ Scroll Down ↓</p>
          </div>
        </div>
      )}

      {activeSection === 'portfolio' && <Portfolio />}
      
      {activeSection === 'about' && (
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Haqqımda
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Salam! Mən Ravan Gulievyəm. React, Three.js və veb dizayn ilə xüsusi maraq göstərən 
              front-end developer. 3D web animasiyaları yaratmaq mənim əsas hobbim.
            </p>
          </div>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Əlaqə
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                📧 Email: <a href="mailto:ravan@example.com" className="text-purple-400 hover:text-purple-300">ravan@example.com</a>
              </p>
              <p className="text-lg text-gray-300">
                💼 GitHub: <a href="https://github.com/RavanGuliev" className="text-purple-400 hover:text-purple-300">github.com/RavanGuliev</a>
              </p>
              <p className="text-lg text-gray-300">
                🔗 LinkedIn: <a href="#" className="text-purple-400 hover:text-purple-300">linkedin.com/in/ravan</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
