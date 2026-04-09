import { islands } from '../constants'
import type { IslandId, OverlayPanelClassNames } from '../types'

export function OverlayHUD({
  activeIslandId,
  onTeleport,
  panelClassNames,
}: {
  activeIslandId: IslandId | null
  onTeleport: (islandId: IslandId) => void
  panelClassNames: OverlayPanelClassNames
}) {
  void panelClassNames

  return (
    <nav className="teleport-dock" aria-label="Teleport">
      {islands.map((island, index) => (
        <button
          key={island.id}
          className={island.id === activeIslandId ? 'is-active' : undefined}
          onClick={() => onTeleport(island.id)}
          type="button"
          aria-label={`Teleport to ${island.title}`}
          title={island.title}
        >
          <span>{index + 1}</span>
        </button>
      ))}
    </nav>
  )
}
