import { Float, Sparkles } from '@react-three/drei'
import { IslandCore } from './IslandCore'

function Leaf({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}) {
  return (
    <mesh castShadow position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[0.44, 14, 14]} />
      <meshStandardMaterial color="#84cc16" roughness={0.98} />
    </mesh>
  )
}

export function OasisIsland() {
  return (
    <group position={[19, -1.8, 9]}>
      <Float speed={1.1} floatIntensity={0.15} rotationIntensity={0.04}>
        <IslandCore
          position={[0, 0, 0]}
          topColor="#65a30d"
          sideColor="#365314"
          topScale={[1.52, 1.02, 1.34]}
          sideScale={[2.1, 1.7, 1.95]}
        />
        <mesh castShadow receiveShadow position={[0.15, 0.9, 0.1]}>
          <cylinderGeometry args={[0.14, 0.2, 2.3, 12]} />
          <meshStandardMaterial color="#14532d" roughness={0.96} />
        </mesh>
        <Leaf position={[-0.95, 1.9, 0.18]} rotation={[0, 0, -0.9]} scale={1.05} />
        <Leaf position={[0.85, 2.3, -0.1]} rotation={[0, 0, 0.84]} scale={1.15} />
        <Leaf position={[-0.55, 2.8, -0.32]} rotation={[0, 0, -0.45]} scale={0.96} />
        <Leaf position={[0.72, 3.2, 0.12]} rotation={[0, 0, 0.55]} scale={0.85} />
        <mesh castShadow receiveShadow position={[2.05, 1.02, 0.7]}>
          <boxGeometry args={[1.25, 0.3, 1.25]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.78} />
        </mesh>
        <mesh castShadow receiveShadow position={[2.05, 1.52, 0.7]}>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.72} />
        </mesh>
        <mesh castShadow receiveShadow position={[2.05, 2.3, 0.7]}>
          <coneGeometry args={[0.36, 0.78, 6]} />
          <meshStandardMaterial color="#1f2937" roughness={0.82} />
        </mesh>
        <Sparkles
          count={14}
          scale={[6, 3, 6]}
          position={[0.3, 2.8, 0.3]}
          size={3}
          speed={0.28}
          color="#bef264"
        />
      </Float>
    </group>
  )
}
