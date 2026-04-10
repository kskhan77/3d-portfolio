import type { ReactNode } from 'react'
import { Clone, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { natureAssetPaths } from './constants'
import { natureKitConfig } from './styles'
import type { NatureAssetKey } from './types'

type NatureAssetTransformProps = {
  position?: THREE.Vector3Tuple
  rotation?: THREE.Vector3Tuple
  scale?: number | THREE.Vector3Tuple
}

export function NatureAsset({
  asset,
  fallback,
  ...props
}: {
  asset: NatureAssetKey
  fallback: ReactNode
} & NatureAssetTransformProps) {
  const assetPath = natureAssetPaths[asset]

  if (!natureKitConfig.enabled || !assetPath) {
    return <group {...props}>{fallback}</group>
  }

  return <LoadedNatureAsset assetPath={assetPath} fallback={fallback} {...props} />
}

function LoadedNatureAsset({
  assetPath,
  fallback,
  ...props
}: {
  assetPath: string
  fallback: ReactNode
} & NatureAssetTransformProps) {
  const gltf = useGLTF(assetPath)
  const scene = gltf.scene.clone(true)

  if (!scene) {
    return <group {...props}>{fallback}</group>
  }

  return (
    <group {...props}>
      <Clone object={scene} />
    </group>
  )
}
