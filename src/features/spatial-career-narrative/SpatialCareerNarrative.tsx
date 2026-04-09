import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { leaderStart, teleportTargets } from './constants'
import type { IslandId, OverlayPanelClassNames } from './types'
import { OverlayHUD } from './components/OverlayHUD'
import { Scene } from './components/Scene'

export function SpatialCareerNarrative({
  panelClassNames,
}: {
  panelClassNames: OverlayPanelClassNames
}) {
  const [targetPosition, setTargetPositionState] = useState(() => leaderStart.clone())
  const [activeIslandId, setActiveIslandId] = useState<IslandId | null>('logistics')
  const cameraTargetRef = useRef(leaderStart.clone())

  const setTargetPosition = (position: THREE.Vector3) => {
    setTargetPositionState(position.clone())
  }

  const handleTeleport = (islandId: IslandId) => {
    setTargetPosition(teleportTargets[islandId])
  }

  return (
    <>
      <OverlayHUD
        activeIslandId={activeIslandId}
        onTeleport={handleTeleport}
        panelClassNames={panelClassNames}
      />

      <section className="canvas-shell">
        <Canvas
          shadows
          camera={{ position: [3, 8, 20], fov: 42 }}
          gl={{ antialias: true }}
          style={{ width: '100%', height: '100vh' }}
        >
          <Scene
            targetPosition={targetPosition}
            setTargetPosition={setTargetPosition}
            activeIslandId={activeIslandId}
            setActiveIslandId={setActiveIslandId}
            cameraTargetRef={cameraTargetRef}
          />
        </Canvas>
      </section>
    </>
  )
}
