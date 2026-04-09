import { useMemo } from 'react'
import * as THREE from 'three'

export function Bridge({
  start,
  end,
  color,
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: string
}) {
  const path = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const mid = startVec.clone().lerp(endVec, 0.5)
    mid.y += 1.8
    return new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
  }, [end, start])

  const points = useMemo(() => path.getPoints(16), [path])

  return (
    <group>
      <mesh castShadow receiveShadow>
        <tubeGeometry args={[path, 48, 0.22, 8, false]} />
        <meshStandardMaterial color={color} metalness={0.28} roughness={0.56} />
      </mesh>
      {points.map((point, index) => (
        <mesh key={index} castShadow position={point.toArray()}>
          <boxGeometry args={[0.22, 0.28, 0.22]} />
          <meshStandardMaterial color="#dbeafe" metalness={0.3} roughness={0.2} />
        </mesh>
      ))}
    </group>
  )
}
