export function IslandCore({
  position,
  topColor,
  sideColor,
  topScale,
  sideScale,
}: {
  position: [number, number, number]
  topColor: string
  sideColor: string
  topScale: [number, number, number]
  sideScale: [number, number, number]
}) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, -1.4, 0]} scale={sideScale}>
        <dodecahedronGeometry args={[1.9, 0]} />
        <meshStandardMaterial color={sideColor} roughness={0.86} metalness={0.12} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, 0]} scale={topScale}>
        <cylinderGeometry args={[2.8, 3.3, 1.2, 7]} />
        <meshStandardMaterial color={topColor} roughness={0.65} metalness={0.18} />
      </mesh>
    </group>
  )
}
