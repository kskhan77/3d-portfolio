import { useMemo } from 'react'
import * as THREE from 'three'

export function TrailArc({
  start,
  end,
  color,
  arcHeight = 2.6,
  thickness = 0.06,
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: string
  arcHeight?: number
  thickness?: number
}) {
  const curve = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const mid = startVec.clone().lerp(endVec, 0.5)
    mid.y += arcHeight
    return new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
  }, [arcHeight, end, start])

  const points = useMemo(() => curve.getPoints(18), [curve])

  return (
    <group>
      <mesh>
        <tubeGeometry args={[curve, 48, thickness, 8, false]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.15}
          transparent
          opacity={0.9}
        />
      </mesh>
      {points.map((point, index) => (
        <mesh key={index} position={point.toArray()}>
          <sphereGeometry args={[thickness * 1.4 + (index % 3) * 0.02, 10, 10]} />
          <meshStandardMaterial color="#f8fafc" emissive={color} emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  )
}
