import { useRef, type RefObject } from 'react'
import { ContactShadows, Sky, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { islands } from '../constants'
import { narrativeTheme } from '../styles'
import type { IslandId } from '../types'
import { Bridge } from './Bridge'
import { CameraRig } from './CameraRig'
import { CloudLayer } from './CloudLayer'
import { MiniIsland } from './MiniIsland'
import { NavigationPlane } from './NavigationPlane'
import { Squad } from './Squad'
import { StoryOverlay } from './StoryOverlay'
import { LogisticsIsland } from './islands/LogisticsIsland'
import { NeuralSpireIsland } from './islands/NeuralSpireIsland'
import { OasisIsland } from './islands/OasisIsland'

export function Scene({
  targetPosition,
  setTargetPosition,
  activeIslandId,
  setActiveIslandId,
  cameraTargetRef,
}: {
  targetPosition: THREE.Vector3
  setTargetPosition: (position: THREE.Vector3) => void
  activeIslandId: IslandId | null
  setActiveIslandId: (islandId: IslandId | null) => void
  cameraTargetRef: RefObject<THREE.Vector3>
}) {
  const proximityVectorRef = useRef(new THREE.Vector3())

  const handleGroupCenterChange = (center: THREE.Vector3) => {
    cameraTargetRef.current?.copy(center)

    let closestIslandId: IslandId | null = null
    let smallestDistance = Infinity

    islands.forEach((island) => {
      const proximityVector = proximityVectorRef.current
      proximityVector.set(...island.position)
      const distance = center.distanceTo(proximityVector)
      if (distance < narrativeTheme.proximityDistance && distance < smallestDistance) {
        smallestDistance = distance
        closestIslandId = island.id
      }
    })

    setActiveIslandId(closestIslandId)
  }

  const activeIsland = islands.find((island) => island.id === activeIslandId) ?? null

  return (
    <>
      <color attach="background" args={['#07111f']} />
      <fog attach="fog" args={['#07111f', 28, 70]} />
      <ambientLight intensity={0.9} color="#dbeafe" />
      <hemisphereLight intensity={0.8} color="#dbeafe" groundColor="#020617" />
      <directionalLight
        castShadow
        position={[18, 20, 12]}
        intensity={2.4}
        color="#e0f2fe"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-18, 4.5, 8]} intensity={14} color="#38bdf8" distance={12} />
      <pointLight position={[0, 8, -10]} intensity={18} color="#7dd3fc" distance={16} />
      <pointLight position={[19, 4.2, 9]} intensity={11} color="#bef264" distance={12} />

      <Stars radius={120} depth={60} count={4200} factor={4} saturation={0} speed={0.5} />
      <Sparkles count={80} scale={[70, 24, 70]} position={[0, 5, 0]} size={2} speed={0.14} color="#ffffff" />
      <Sky
        distance={450000}
        turbidity={10}
        rayleigh={0.28}
        mieCoefficient={0.007}
        mieDirectionalG={0.82}
        sunPosition={[4, 1, -3]}
      />

      <CloudLayer />
      <MiniIsland position={[-28, -3.4, -4]} color="#164e63" glow="#67e8f9" />
      <MiniIsland position={[27, -3.8, -3]} color="#3f6212" glow="#bef264" />
      <MiniIsland position={[9, -1.8, 18]} color="#312e81" glow="#c4b5fd" />

      <LogisticsIsland />
      <NeuralSpireIsland />
      <OasisIsland />

      <Bridge start={[-12.8, 0.1, 4.3]} end={[-4.4, 3.1, -7.2]} color="#64748b" />
      <Bridge start={[4.5, 3.1, -7.6]} end={[13.6, -0.2, 5]} color="#94a3b8" />

      <Squad targetPosition={targetPosition} onGroupCenterChange={handleGroupCenterChange} />
      <NavigationPlane onMove={setTargetPosition} />
      <StoryOverlay activeIsland={activeIsland} />
      <ContactShadows position={[0, -4.4, 0]} opacity={0.42} blur={3} scale={60} far={18} />
      <CameraRig targetRef={cameraTargetRef} />
    </>
  )
}
