import type { MouseEvent } from 'react'
import { type ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'
import { narrativeTheme } from '../styles'

export function NavigationPlane({ onMove }: { onMove: (position: THREE.Vector3) => void }) {
  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    const next = event.point.clone()
    next.y = narrativeTheme.leaderHeight
    onMove(next)
  }

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} onClick={handleClick} receiveShadow>
      <planeGeometry args={[78, 60]} />
      <meshStandardMaterial color="#020617" transparent opacity={0.01} />
    </mesh>
  )
}
