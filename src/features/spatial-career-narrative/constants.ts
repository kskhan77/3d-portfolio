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
    'Step into the world as Khurram and explore floating islands, living gardens, neon research landmarks, and a personal bio outpost connected by glowing trails.',
}

export const bioLandmarkPosition = new THREE.Vector3(-2.5, 1.2, 3.5)

export const bioContent = {
  eyebrow: 'The Executive Overview',
  title: 'Full Stack Architect | MS-AI University of Michigan | Spatial Computing Researcher',
  description:
    'Highly skilled developer with over 3 years of experience specializing in the design and deployment of scalable, enterprise-level web applications. Expert in building robust systems using a modern tech stack centered on React.js, Next.js, and Django. Currently bridging the gap between logistics engineering and the future of Artificial Intelligence and Extended Reality (XR) at the University of Michigan.',
}
