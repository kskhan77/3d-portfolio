import { Float, Sparkles } from '@react-three/drei'
import { IslandCore } from './IslandCore'

export function LogisticsIsland() {
  return (
    <group position={[-18, -1.4, 8]}>
      <Float speed={1.2} floatIntensity={0.16} rotationIntensity={0.04}>
        <IslandCore
          position={[0, 0, 0]}
          topColor="#7c8da4"
          sideColor="#1e293b"
          topScale={[1.45, 1, 1.3]}
          sideScale={[1.9, 1.55, 1.65]}
        />
        <mesh castShadow receiveShadow position={[0, 1.05, 0.4]}>
          <boxGeometry args={[3.8, 0.34, 2.6]} />
          <meshStandardMaterial color="#334155" metalness={0.94} roughness={0.12} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.4, 1.65, 0.28]}>
          <boxGeometry args={[1.38, 1, 1.55]} />
          <meshStandardMaterial color="#0f172a" metalness={0.92} roughness={0.1} />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.05, 1.5, 0.4]}>
          <boxGeometry args={[1.7, 1.12, 1.82]} />
          <meshStandardMaterial color="#1f2937" metalness={0.88} roughness={0.16} />
        </mesh>
        {[
          [-1.15, 0.85, 1.42],
          [1.2, 0.85, 1.42],
          [-1.15, 0.85, -0.62],
          [1.2, 0.85, -0.62],
        ].map((point, index) => (
          <mesh key={index} castShadow receiveShadow position={point as [number, number, number]}>
            <cylinderGeometry args={[0.34, 0.34, 0.42, 18]} />
            <meshStandardMaterial color="#020617" metalness={0.55} roughness={0.42} />
          </mesh>
        ))}
        <mesh castShadow position={[-3.05, 1.35, -0.45]}>
          <boxGeometry args={[0.32, 1.55, 0.32]} />
          <meshStandardMaterial color="#64748b" metalness={0.62} roughness={0.28} />
        </mesh>
        <mesh castShadow position={[-3.05, 2.25, -0.45]}>
          <boxGeometry args={[0.88, 0.18, 0.88]} />
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={1.25} />
        </mesh>
        <Sparkles
          count={18}
          scale={[5, 2, 5]}
          position={[0, 2.8, 0.4]}
          size={3}
          speed={0.35}
          color="#7dd3fc"
        />
      </Float>
    </group>
  )
}
