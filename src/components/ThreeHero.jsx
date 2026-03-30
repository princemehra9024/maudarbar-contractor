import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

function GoldSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#d4a853"
          roughness={0.15}
          metalness={0.9}
          distort={0.25}
          speed={1.5}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  )
}

// Extract random generation to avoid calling impure Math.random during render
const generateCubes = () =>
  Array.from({ length: 8 }, () => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4 - 2,
    ],
    scale: 0.15 + Math.random() * 0.25,
    speed: 0.2 + Math.random() * 0.5,
    rotSpeed: 0.3 + Math.random() * 0.5,
  }))

function FloatingCubes() {
  const groupRef = useRef()
  const cubes = useMemo(() => generateCubes(), [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} floatIntensity={0.5}>
          <Box
            args={[1, 1, 1]}
            position={cube.position}
            scale={cube.scale}
          >
            <meshStandardMaterial
              color="#d4a853"
              roughness={0.3}
              metalness={0.8}
              transparent
              opacity={0.3}
              wireframe
            />
          </Box>
        </Float>
      ))}
    </group>
  )
}

const generateParticles = (count) => {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 16
    arr[i * 3 + 1] = (Math.random() - 0.5) * 12
    arr[i * 3 + 2] = (Math.random() - 0.5) * 8
  }
  return arr
}

function Particles() {
  const particlesRef = useRef()
  const count = 200

  const positions = useMemo(() => generateParticles(count), [count])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4a853"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeHero() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff8e8" />
        <directionalLight position={[-3, 2, 2]} intensity={0.4} color="#d4a853" />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#d4a853" />
        <GoldSphere />
        <FloatingCubes />
        <Particles />
      </Canvas>
    </div>
  )
}
