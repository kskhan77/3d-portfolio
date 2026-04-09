export type IslandId = 'logistics' | 'neural' | 'oasis'

export type IslandDefinition = {
  id: IslandId
  title: string
  subtitle: string
  description: string
  position: [number, number, number]
  infoPosition: [number, number, number]
}

export type OverlayPanelClassNames = {
  hero: string
  teleport: string
  status: string
}
