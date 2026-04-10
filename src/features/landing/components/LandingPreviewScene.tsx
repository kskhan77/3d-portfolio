import { Float, Html, Sky, Sparkles, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { GlowButton } from '../../../shared/ui'

function PreviewSceneContent({ onStart }: { onStart: () => void }) {
  return (
    <>
      <color attach="background" args={['#140722']} />
      <fog attach="fog" args={['#140722', 10, 30]} />
      <ambientLight intensity={1} color="#e9d5ff" />
      <hemisphereLight intensity={0.9} color="#c4b5fd" groundColor="#0f172a" />
      <directionalLight position={[6, 10, 6]} intensity={2.5} color="#f0abfc" />
      <Stars radius={70} depth={30} count={2500} factor={4} speed={0.5} saturation={0} />
      <Sparkles count={40} scale={[22, 8, 22]} position={[0, 2, 0]} size={3} speed={0.3} color="#f5d0fe" />
      <Sky
        distance={450000}
        turbidity={10}
        rayleigh={0.2}
        mieCoefficient={0.006}
        mieDirectionalG={0.8}
        sunPosition={[4, 1, -1]}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#250a23" />
      </mesh>

      <gridHelper args={[40, 20, '#7c3aed', '#4c1d95']} position={[0, -1.58, 0]} />

      <Float speed={1.2} floatIntensity={0.14} rotationIntensity={0.03}>
        <group position={[-1.3, 0, 0]}>
          <mesh castShadow receiveShadow position={[0, -0.9, 0]}>
            <cylinderGeometry args={[3.1, 3.7, 1, 48]} />
            <meshStandardMaterial color="#fb7185" emissive="#fb7185" emissiveIntensity={0.08} />
          </mesh>
          <mesh castShadow receiveShadow position={[0, -1.55, 0]}>
            <dodecahedronGeometry args={[2.6, 0]} />
            <meshStandardMaterial color="#3b0764" roughness={0.92} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]}>
            <ringGeometry args={[3.6, 3.78, 64]} />
            <meshBasicMaterial color="#f5d0fe" />
          </mesh>

          <mesh castShadow position={[-1.3, 0.5, 0.2]}>
            <boxGeometry args={[0.5, 2, 0.5]} />
            <meshStandardMaterial color="#6d28d9" />
          </mesh>
          <mesh castShadow position={[-1.3, 1.75, 0.2]}>
            <boxGeometry args={[0.86, 0.96, 0.86]} />
            <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.9} />
          </mesh>

          <mesh castShadow position={[0.5, 0.68, -0.2]}>
            <boxGeometry args={[1.45, 0.24, 0.24]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
          <mesh castShadow position={[0.5, 0.68, 0.45]}>
            <boxGeometry args={[1.45, 0.24, 0.24]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
          <mesh castShadow position={[-0.1, 1.35, 0.12]}>
            <boxGeometry args={[0.18, 1.35, 0.18]} />
            <meshStandardMaterial color="#94a3b8" />
          </mesh>
          <mesh castShadow position={[1.1, 1.35, 0.12]}>
            <boxGeometry args={[0.18, 1.35, 0.18]} />
            <meshStandardMaterial color="#94a3b8" />
          </mesh>

          <mesh castShadow position={[-0.25, 0.12, 0.3]}>
            <boxGeometry args={[1.25, 0.52, 1.95]} />
            <meshStandardMaterial color="#7f1d1d" metalness={0.22} roughness={0.5} />
          </mesh>
          <mesh castShadow position={[-0.05, 0.62, 0.4]}>
            <boxGeometry args={[0.82, 0.46, 1.05]} />
            <meshStandardMaterial color="#1f2937" metalness={0.3} roughness={0.4} />
          </mesh>
          {[
            [-0.78, -0.22, 1.08],
            [0.38, -0.22, 1.08],
            [-0.78, -0.22, -0.48],
            [0.38, -0.22, -0.48],
          ].map((point, index) => (
            <mesh key={index} castShadow position={point as [number, number, number]}>
              <cylinderGeometry args={[0.28, 0.28, 0.32, 18]} />
              <meshStandardMaterial color="#111827" />
            </mesh>
          ))}

          {[
            [-1.65, 2.8, -0.1, 1.25],
            [-0.85, 3.2, 0.3, 1.4],
            [-0.25, 3.5, -0.22, 1.28],
            [-1.25, 2.05, 0.62, 1.12],
          ].map(([x, y, z, scale], index) => (
            <mesh key={index} castShadow position={[x, y, z]} scale={scale as number}>
              <sphereGeometry args={[0.56, 12, 12]} />
              <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={0.18} />
            </mesh>
          ))}
        </group>
      </Float>

      <Html position={[4.4, 1.7, 0]} transform distanceFactor={11}>
        <div className="landing-canvas-cta">
          <p className="landing-canvas-kicker">Spatial Career Narrative</p>
          <h1>Click To Start</h1>
          <span>Open the world and explore with game controls.</span>
          <GlowButton onClick={onStart} type="button" variant="secondary">
            Open World
          </GlowButton>
        </div>
      </Html>
    </>
  )
}

export function LandingPreviewScene({ onStart }: { onStart: () => void }) {
  return (
    <section className="landing-preview">
      <Canvas
        camera={{ position: [0, 4.8, 10.2], fov: 35 }}
        gl={{ antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <PreviewSceneContent onStart={onStart} />
      </Canvas>
    </section>
  )
}
