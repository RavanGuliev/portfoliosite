import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Mesh, Icosahedron, Torus, Box } from '@react-three/drei'

function RotatingBox() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.008
  })

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhongMaterial color="#7c3aed" wireframe={false} emissive="#5b21b6" />
    </mesh>
  )
}

function FloatingIcosahedron() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.x += 0.003
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.5
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial color="#ec4899" wireframe={false} emissive="#be185d" />
    </mesh>
  )
}

function TorusRing() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.x += 0.002
    meshRef.current.rotation.z += 0.004
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <torusGeometry args={[1.2, 0.4, 32, 32]} />
      <meshPhongMaterial color="#06b6d4" wireframe={false} emissive="#0369a1" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#ec4899" />

      {/* 3D Objects */}
      <RotatingBox />
      <FloatingIcosahedron />
      <TorusRing />

      {/* Hero Text Overlay */}
      <mesh position={[0, -3, 0]}>
        <planeGeometry args={[10, 2]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </>
  )
}
