import { Html } from '@react-three/drei'

export function Character({
  color,
  emissive,
  name,
}: {
  color: string
  emissive: string
  name: string
}) {
  return (
    <group>
      <mesh castShadow position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.26, 0.3, 0.2, 6]} />
        <meshStandardMaterial color="#111827" roughness={0.72} />
      </mesh>
      <mesh castShadow position={[0, 1.05, 0]}>
        <capsuleGeometry args={[0.28, 0.65, 6, 14]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.25} />
      </mesh>
      <mesh castShadow position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.34, 18, 18]} />
        <meshStandardMaterial color="#f8dccb" roughness={0.88} />
      </mesh>
      <mesh castShadow position={[0, 1.92, 0.3]}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshStandardMaterial color="#f8fafc" emissive="#ffffff" emissiveIntensity={0.9} />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[0.72, 20]} />
        <meshStandardMaterial color={emissive} transparent opacity={0.15} />
      </mesh>
      <Html center position={[0, 2.55, 0]} distanceFactor={22} occlude>
        <div className="name-tag">{name}</div>
      </Html>
    </group>
  )
}
