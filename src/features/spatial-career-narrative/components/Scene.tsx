import { useRef, useState } from 'react'
import { ContactShadows, KeyboardControls, Sky, Sparkles, Stars } from '@react-three/drei'
import { CuboidCollider, Physics } from '@react-three/rapier'
import * as THREE from 'three'
import { bioLandmarkPosition, islands } from '../constants'
import { narrativeTheme } from '../styles'
import type { IslandId } from '../types'
import { BioLandmark } from './BioLandmark'
import { CloudLayer } from './CloudLayer'
import { MiniIsland } from './MiniIsland'
import { Squad } from './Squad'
import { StoryOverlay } from './StoryOverlay'
import { useTheatreWorldController } from './TheatreWorldController'
import { TrailArc } from './TrailArc'
import { LogisticsIsland } from './islands/LogisticsIsland'
import { NeuralSpireIsland } from './islands/NeuralSpireIsland'
import { OasisIsland } from './islands/OasisIsland'

export function Scene({
  activeIslandId,
  setActiveIslandId,
  onOpenBio,
  teleportTarget,
  teleportVersion,
}: {
  activeIslandId: IslandId | null
  setActiveIslandId: (islandId: IslandId | null) => void
  onOpenBio: () => void
  teleportTarget: THREE.Vector3
  teleportVersion: number
}) {
  const proximityVectorRef = useRef(new THREE.Vector3())
  const [isBioNearby, setIsBioNearby] = useState(false)
  const worldController = useTheatreWorldController()

  const handleGroupCenterChange = (center: THREE.Vector3) => {
    setIsBioNearby(center.distanceTo(bioLandmarkPosition) < 5.4)

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
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]

  return (
    <KeyboardControls map={keyboardMap}>
      <color attach="background" args={['#07111f']} />
      <fog attach="fog" args={['#07111f', worldController.fogNear, worldController.fogFar]} />
      <ambientLight intensity={worldController.ambientIntensity} color="#dbeafe" />
      <hemisphereLight intensity={worldController.hemisphereIntensity} color="#dbeafe" groundColor="#020617" />
      <directionalLight
        castShadow
        position={[18, 20, 12]}
        intensity={worldController.directionalIntensity}
        color="#e0f2fe"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-18, 4.5, 8]} intensity={14} color="#38bdf8" distance={12} />
      <pointLight position={[0, 8, -10]} intensity={18} color="#7dd3fc" distance={16} />
      <pointLight position={[19, 4.2, 9]} intensity={11} color="#bef264" distance={12} />

      <Stars radius={120} depth={60} count={4200} factor={4} saturation={0} speed={0.5} />
      <Sparkles
        count={80}
        scale={[70, 24, 70]}
        position={[0, 5, 0]}
        size={2}
        speed={worldController.sparkleSpeed}
        color="#ffffff"
      />
      <Sky
        distance={450000}
        turbidity={10}
        rayleigh={0.28}
        mieCoefficient={0.007}
        mieDirectionalG={0.82}
        sunPosition={[4, 1, -3]}
      />

      <CloudLayer />
      <Physics timeStep="vary" gravity={[0, -14, 0]}>
        <CuboidCollider args={[40, 0.4, 40]} position={[0, -0.1, 0]} />
        <CuboidCollider args={[6, 0.4, 4]} position={[-18, 0.1, 8]} />
        <CuboidCollider args={[6, 0.4, 4]} position={[0, 0.1, -10]} />
        <CuboidCollider args={[6, 0.4, 4]} position={[19, 0.1, 9]} />
        <CuboidCollider args={[5, 0.2, 1.2]} position={[-8.5, 0.4, -1.8]} />
        <CuboidCollider args={[5, 0.2, 1.2]} position={[9.2, 0.4, -1.1]} />

        <group scale={worldController.worldFloat}>
          <MiniIsland position={[-28, -3.4, -4]} color="#164e63" glow="#67e8f9" />
          <MiniIsland position={[27, -3.8, -3]} color="#3f6212" glow="#bef264" />
          <MiniIsland position={[9, -1.8, 18]} color="#312e81" glow="#c4b5fd" />
          <BioLandmark isNearby={isBioNearby} onOpenBio={onOpenBio} />

          <LogisticsIsland />
          <NeuralSpireIsland />
          <OasisIsland />
          <TrailArc
            start={[-12.4, 1.1, 4.2]}
            end={[-4.6, 2.9, -7.2]}
            color="#67e8f9"
            arcHeight={worldController.trailArcHeight}
            thickness={worldController.trailThickness}
          />
          <TrailArc
            start={[4.5, 2.9, -7.5]}
            end={[13.6, 0.8, 4.8]}
            color="#bef264"
            arcHeight={worldController.trailArcHeight}
            thickness={worldController.trailThickness}
          />
        </group>

        <Squad
          teleportTarget={teleportTarget}
          teleportVersion={teleportVersion}
          onGroupCenterChange={handleGroupCenterChange}
        />
        <StoryOverlay activeIsland={activeIsland} />
      </Physics>
      <ContactShadows
        position={[0, -4.4, 0]}
        opacity={worldController.shadowOpacity}
        blur={3}
        scale={60}
        far={18}
      />
    </KeyboardControls>
  )
}
