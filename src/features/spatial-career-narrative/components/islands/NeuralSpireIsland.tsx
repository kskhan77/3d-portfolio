import { Float, Sparkles } from '@react-three/drei'
import { NatureCluster } from '../nature'
import { IslandCore } from './IslandCore'

function CrystalCluster({ points }: { points: [number, number, number][] }) {
  return (
    <>
      {points.map((point, index) => (
        <mesh
          key={index}
          castShadow
          position={point}
          rotation={[0, index * 0.45, (index % 2 === 0 ? 1 : -1) * 0.16]}
        >
          <coneGeometry args={[0.38 + (index % 3) * 0.08, 1.8 + (index % 2) * 0.7, 6]} />
          <meshPhysicalMaterial
            color="#b7f0ff"
            emissive="#38bdf8"
            emissiveIntensity={0.55}
            roughness={0.1}
            metalness={0.04}
            transmission={0.62}
            transparent
            opacity={0.88}
          />
        </mesh>
      ))}
    </>
  )
}

export function NeuralSpireIsland() {
  return (
    <group position={[0, 1.3, -10]}>
      <Float speed={1.4} floatIntensity={0.22} rotationIntensity={0.05}>
        <IslandCore
          position={[0, 0, 0]}
          topColor="#1d4ed8"
          sideColor="#0f172a"
          topScale={[1.36, 1, 1.22]}
          sideScale={[2.05, 1.85, 1.85]}
        />
        <mesh castShadow position={[0, 4.2, 0]}>
          <cylinderGeometry args={[1.1, 1.42, 7.4, 12]} />
          <meshPhysicalMaterial
            color="#7dd3fc"
            roughness={0.08}
            metalness={0.08}
            transmission={0.76}
            transparent
            opacity={0.88}
            thickness={1.2}
          />
        </mesh>
        <mesh castShadow position={[0, 8.1, 0]}>
          <octahedronGeometry args={[1.05, 0]} />
          <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={1.95} />
        </mesh>
        {[2.2, 4.2, 6.1].map((height, index) => (
          <mesh key={height} castShadow position={[0, height, 0]} rotation={[Math.PI / 2, index * 0.5, 0]}>
            <torusGeometry args={[2.25 + index * 0.3, 0.08, 10, 60]} />
            <meshStandardMaterial color="#93c5fd" emissive="#38bdf8" emissiveIntensity={1.1} />
          </mesh>
        ))}
        <CrystalCluster
          points={[
            [-2.8, 1.15, 1.1],
            [-2.15, 1.2, -1.5],
            [2.7, 1.05, 1.5],
            [2.2, 1.05, -1.7],
            [0.5, 1.15, 2.25],
          ]}
        />
        <NatureCluster asset="rockLarge" position={[-2.6, 1.02, -2.25]} scale={1.08} />
        <NatureCluster asset="rockSmall" position={[2.95, 1.02, 2.1]} scale={0.88} />
        <NatureCluster asset="grassClump" position={[-1.45, 1.02, 2.05]} scale={0.7} />
        <NatureCluster asset="grassClump" position={[1.2, 1.02, 2.45]} scale={0.64} />
        <NatureCluster asset="flowerPatch" position={[-0.4, 1.03, 2.15]} scale={0.5} />
        <NatureCluster asset="flowerPatch" position={[2.25, 1.02, -0.15]} scale={0.46} />
        <Sparkles
          count={34}
          scale={[7.5, 8.5, 7.5]}
          position={[0, 4.4, 0]}
          size={4}
          speed={0.55}
          color="#dbeafe"
        />
      </Float>
    </group>
  )
}
