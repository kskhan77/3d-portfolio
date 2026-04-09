export function CloudLayer() {
  return (
    <group position={[0, -4.2, 0]}>
      {[
        [-22, 0, 8, 9],
        [-8, 0.4, -12, 12],
        [9, 0.1, -4, 11],
        [23, -0.2, 8, 10],
      ].map(([x, y, z, scale], index) => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={[x, y, z]} receiveShadow>
          <circleGeometry args={[scale as number, 36]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.34} />
        </mesh>
      ))}
    </group>
  )
}
