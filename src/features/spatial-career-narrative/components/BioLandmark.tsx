import { Float, Html, Sparkles, Text } from '@react-three/drei'
import { NatureCluster } from './nature'
import { bioContent, bioLandmarkPosition } from '../constants'

export function BioLandmark({
  isNearby,
  onOpenBio,
}: {
  isNearby: boolean
  onOpenBio: () => void
}) {
  return (
    <group position={bioLandmarkPosition.toArray()}>
      <Float speed={1.3} floatIntensity={0.18} rotationIntensity={0.05}>
        <mesh castShadow receiveShadow position={[0, -0.92, 0]} onClick={onOpenBio}>
          <cylinderGeometry args={[2.8, 3.25, 0.9, 8]} />
          <meshStandardMaterial color="#355e1f" roughness={0.9} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.12, 0]} onClick={onOpenBio}>
          <cylinderGeometry args={[2.35, 2.9, 0.42, 8]} />
          <meshStandardMaterial color="#84cc16" roughness={0.95} />
        </mesh>
        <NatureCluster asset="treeRound" position={[-1.35, 0.95, -0.45]} scale={0.88} />
        <NatureCluster asset="bushRound" position={[1.35, 0.98, -0.55]} scale={0.8} />
        <NatureCluster asset="flowerPatch" position={[-0.55, 0.92, 1.35]} scale={0.88} />
        <NatureCluster asset="grassClump" position={[0.9, 0.92, 1.15]} scale={0.84} />

        <mesh castShadow position={[-0.72, 1.55, -0.08]} onClick={onOpenBio}>
          <boxGeometry args={[0.12, 2.15, 0.12]} />
          <meshStandardMaterial color="#9a6b39" roughness={0.86} />
        </mesh>
        <mesh castShadow position={[0.72, 1.55, -0.08]} onClick={onOpenBio}>
          <boxGeometry args={[0.12, 2.15, 0.12]} />
          <meshStandardMaterial color="#9a6b39" roughness={0.86} />
        </mesh>
        <mesh castShadow position={[0, 2.05, -0.08]} onClick={onOpenBio}>
          <boxGeometry args={[1.64, 1.05, 0.12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.7} />
        </mesh>
        <mesh castShadow position={[0, 2.05, -0.02]} onClick={onOpenBio}>
          <boxGeometry args={[1.46, 0.88, 0.04]} />
          <meshStandardMaterial color="#0f172a" roughness={0.42} />
        </mesh>
        <mesh castShadow position={[0, 2.78, 0.02]} onClick={onOpenBio}>
          <boxGeometry args={[1.9, 0.22, 0.16]} />
          <meshStandardMaterial color="#ca8a04" emissive="#f59e0b" emissiveIntensity={0.4} />
        </mesh>
        <Sparkles
          count={18}
          scale={[4.8, 3.8, 4.8]}
          position={[0, 2.25, 0]}
          size={3}
          speed={0.45}
          color="#bef264"
        />
        <Text
          position={[0, 2.28, 0.08]}
          maxWidth={1.18}
          fontSize={0.14}
          lineHeight={1.1}
          color="#f8fafc"
          anchorX="center"
          anchorY="middle"
        >
          {bioContent.eyebrow}
        </Text>
        <Text
          position={[0, 1.9, 0.08]}
          maxWidth={1.1}
          fontSize={0.09}
          lineHeight={1.16}
          color="#67e8f9"
          anchorX="center"
          anchorY="middle"
        >
          {'Full Stack Architect\nMSAI Candidate\nClick to open'}
        </Text>
      </Float>

      {isNearby ? (
        <Html center position={[0, 4.15, 0]} distanceFactor={16}>
          <button className="bio-prompt" onClick={onOpenBio} type="button">
            Bio Overview
          </button>
        </Html>
      ) : null}
    </group>
  )
}
