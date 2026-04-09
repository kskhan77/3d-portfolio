import * as THREE from 'three'
import type { IslandDefinition, IslandId } from './types'

export const islands: IslandDefinition[] = [
  {
    id: 'logistics',
    title: 'The Logistics Port',
    subtitle: 'Continental Expedited Services',
    description: 'Architect of Starboard & COSMOS.',
    position: [-18, -1.4, 8],
    infoPosition: [-18, 6.2, 8],
  },
  {
    id: 'neural',
    title: 'The Neural Spire',
    subtitle: 'MSAI @ UM-Flint',
    description: 'Researching AI Agents, RAG, and XR with icy neon energy.',
    position: [0, 1.3, -10],
    infoPosition: [0, 10, -10],
  },
  {
    id: 'oasis',
    title: 'The Oasis',
    subtitle: 'Personal',
    description: 'Family, Sprouting, Urdu Poetry, and Cybersecurity (Kali Linux).',
    position: [19, -1.8, 9],
    infoPosition: [19, 6.1, 9],
  },
]

export const teleportTargets: Record<IslandId, THREE.Vector3> = {
  logistics: new THREE.Vector3(-18, 1.1, 8),
  neural: new THREE.Vector3(0, 2.4, -9),
  oasis: new THREE.Vector3(19, 1, 9),
}

export const leaderStart = new THREE.Vector3(-14, 1.1, 6)

export const sceneIntroCopy = {
  eyebrow: 'Spatial Career Narrative',
  title: 'Explore a handcrafted 3D world of career, AI, family, and ice-lit research.',
  description:
    'Click anywhere in the world to move the squad. Khurram leads, while Shazain and Zaynah trail behind across floating islands, bridges, crystals, and story moments.',
}
