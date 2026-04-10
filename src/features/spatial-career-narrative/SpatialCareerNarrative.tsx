import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { leaderStart, teleportTargets } from './constants'
import type { IslandId, NarrativeModalKey } from './types'
import { BioModal } from './components/BioModal'
import { ControlsGuide } from './components/ControlsGuide'
import { OverlayHUD } from './components/OverlayHUD'
import { Scene } from './components/Scene'

export function SpatialCareerNarrative() {
  const [activeIslandId, setActiveIslandId] = useState<IslandId | null>('logistics')
  const [activeModal, setActiveModal] = useState<NarrativeModalKey>(null)
  const [teleportTarget, setTeleportTarget] = useState(() => leaderStart.clone())
  const [teleportVersion, setTeleportVersion] = useState(0)

  const handleTeleport = (islandId: IslandId) => {
    setTeleportTarget(teleportTargets[islandId].clone())
    setTeleportVersion((value) => value + 1)
  }

  const handleOpenBio = () => {
    setActiveModal('bio')
  }

  return (
    <>
      <BioModal open={activeModal === 'bio'} onClose={() => setActiveModal(null)} />
      <OverlayHUD activeIslandId={activeIslandId} onTeleport={handleTeleport} />
      <ControlsGuide />

      <section className="canvas-shell">
        <Canvas
          shadows
          camera={{ position: [3, 8, 20], fov: 42 }}
          gl={{ antialias: true }}
          style={{ width: '100%', height: '100vh' }}
        >
          <Scene
            activeIslandId={activeIslandId}
            setActiveIslandId={setActiveIslandId}
            onOpenBio={handleOpenBio}
            teleportTarget={teleportTarget}
            teleportVersion={teleportVersion}
          />
        </Canvas>
      </section>
    </>
  )
}
