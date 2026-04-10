import type { NatureAssetKey } from './types'
import { natureKitConfig } from './styles'

export const natureAssetPaths: Record<NatureAssetKey, string | null> = {
  treeRound: `${natureKitConfig.basePath}/MapleTree_3.gltf`,
  treePine: `${natureKitConfig.basePath}/BirchTree_2.gltf`,
  bushRound: `${natureKitConfig.basePath}/Bush_Large.gltf`,
  rockLarge: null,
  rockSmall: null,
  flowerPatch: `${natureKitConfig.basePath}/Flower_3_Clump.gltf`,
  grassClump: `${natureKitConfig.basePath}/Grass_Large.gltf`,
  logSmall: null,
}
