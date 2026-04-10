import type { ReactNode } from 'react'
import { NatureAsset } from './NatureAsset'
import type { NatureAssetKey } from './types'

function TreeFallback() {
  return (
    <group>
      <mesh castShadow position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.12, 0.18, 1.4, 10]} />
        <meshStandardMaterial color="#6b4423" roughness={0.92} />
      </mesh>
      <mesh castShadow position={[0, 1.95, 0]}>
        <sphereGeometry args={[0.85, 12, 12]} />
        <meshStandardMaterial color="#a3e635" roughness={0.96} />
      </mesh>
      <mesh castShadow position={[-0.35, 1.62, 0.25]}>
        <sphereGeometry args={[0.52, 12, 12]} />
        <meshStandardMaterial color="#84cc16" roughness={0.96} />
      </mesh>
    </group>
  )
}

function BushFallback() {
  return (
    <group>
      <mesh castShadow position={[0, 0.36, 0]}>
        <sphereGeometry args={[0.52, 12, 12]} />
        <meshStandardMaterial color="#65a30d" roughness={0.98} />
      </mesh>
      <mesh castShadow position={[0.34, 0.28, 0.14]}>
        <sphereGeometry args={[0.34, 12, 12]} />
        <meshStandardMaterial color="#84cc16" roughness={0.98} />
      </mesh>
    </group>
  )
}

function RockFallback({ scale = 1 }: { scale?: number }) {
  return (
    <mesh castShadow scale={scale}>
      <dodecahedronGeometry args={[0.42, 0]} />
      <meshStandardMaterial color="#94a3b8" roughness={0.88} />
    </mesh>
  )
}

function GrassFallback() {
  return (
    <group>
      {[-0.24, 0, 0.22, 0.44].map((x, index) => (
        <mesh key={index} castShadow position={[x, 0.2 + index * 0.04, (index % 2) * 0.08]}>
          <coneGeometry args={[0.08, 0.48 + index * 0.08, 5]} />
          <meshStandardMaterial color="#84cc16" roughness={0.98} />
        </mesh>
      ))}
    </group>
  )
}

function FlowerFallback() {
  return (
    <group>
      <GrassFallback />
      <mesh castShadow position={[0.1, 0.52, 0.02]}>
        <sphereGeometry args={[0.08, 10, 10]} />
        <meshStandardMaterial color="#f472b6" roughness={0.94} />
      </mesh>
      <mesh castShadow position={[-0.2, 0.44, 0.14]}>
        <sphereGeometry args={[0.08, 10, 10]} />
        <meshStandardMaterial color="#f9a8d4" roughness={0.94} />
      </mesh>
    </group>
  )
}

function LogFallback() {
  return (
    <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.12, 0.14, 0.9, 10]} />
      <meshStandardMaterial color="#7c5a34" roughness={0.94} />
    </mesh>
  )
}

function assetFallback(asset: NatureAssetKey): ReactNode {
  switch (asset) {
    case 'treeRound':
    case 'treePine':
      return <TreeFallback />
    case 'bushRound':
      return <BushFallback />
    case 'rockLarge':
      return <RockFallback scale={1.35} />
    case 'rockSmall':
      return <RockFallback />
    case 'flowerPatch':
      return <FlowerFallback />
    case 'grassClump':
      return <GrassFallback />
    case 'logSmall':
      return <LogFallback />
    default:
      return null
  }
}

export function NatureCluster({
  asset,
  position,
  rotation,
  scale = 1,
}: {
  asset: NatureAssetKey
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}) {
  return (
    <NatureAsset
      asset={asset}
      position={position}
      rotation={rotation}
      scale={scale}
      fallback={assetFallback(asset)}
    />
  )
}
