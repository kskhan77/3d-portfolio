import { Float } from '@react-three/drei'

export function MiniIsland({
  position,
  color,
  glow,
}: {
  position: [number, number, number]
  color: string
  glow: string
}) {
  return (
    <Float speed={0.8} floatIntensity={0.14} rotationIntensity={0.03}>
      <group position={position}>
        <mesh castShadow receiveShadow position={[0, -0.8, 0]}>
          <dodecahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </mesh>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.4, 1.7, 0.65, 6]} />
          <meshStandardMaterial color={color} roughness={0.72} />
        </mesh>
        <mesh castShadow position={[0, 1.1, 0]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color={glow} emissive={glow} emissiveIntensity={1.1} />
        </mesh>
      </group>
    </Float>
  )
}
