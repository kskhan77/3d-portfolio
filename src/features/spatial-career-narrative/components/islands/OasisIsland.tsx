import { Float, Sparkles } from '@react-three/drei'
import { NatureCluster } from '../nature'
import { IslandCore } from './IslandCore'

export function OasisIsland() {
  return (
    <group position={[19, -1.8, 9]}>
      <Float speed={1.1} floatIntensity={0.15} rotationIntensity={0.04}>
        <IslandCore
          position={[0, 0, 0]}
          topColor="#65a30d"
          sideColor="#365314"
          topScale={[1.52, 1.02, 1.34]}
          sideScale={[2.1, 1.7, 1.95]}
        />
        <mesh castShadow receiveShadow position={[0.15, 0.9, 0.1]}>
          <cylinderGeometry args={[0.14, 0.2, 2.3, 12]} />
          <meshStandardMaterial color="#14532d" roughness={0.96} />
        </mesh>
        <NatureCluster asset="treeRound" position={[-1.35, 1.15, -0.25]} scale={1.15} />
        <NatureCluster asset="treeRound" position={[0.25, 1.06, -1.2]} scale={0.88} />
        <NatureCluster asset="bushRound" position={[1.3, 1.02, -0.65]} scale={0.92} />
        <NatureCluster asset="bushRound" position={[-1.82, 1.02, 0.2]} scale={0.8} />
        <NatureCluster asset="flowerPatch" position={[0.45, 1, 1.45]} scale={0.9} />
        <NatureCluster asset="flowerPatch" position={[-1.2, 1, 1.25]} scale={0.82} />
        <NatureCluster asset="flowerPatch" position={[1.55, 1, 0.15]} scale={0.76} />
        <NatureCluster asset="grassClump" position={[-0.4, 1, 1.38]} scale={1.05} />
        <NatureCluster asset="grassClump" position={[-1.75, 1, 0.9]} scale={0.92} />
        <NatureCluster asset="grassClump" position={[1.62, 1, 1.22]} scale={0.94} />
        <NatureCluster asset="grassClump" position={[0.15, 1, -1.7]} scale={0.88} />
        <NatureCluster asset="grassClump" position={[-2.05, 1, -0.85]} scale={0.74} />
        <NatureCluster asset="rockSmall" position={[1.86, 1, -1.25]} scale={0.85} />
        <NatureCluster asset="logSmall" position={[0.95, 1.02, -1.35]} rotation={[0, 0.35, 0]} />
        <mesh castShadow receiveShadow position={[2.05, 1.02, 0.7]}>
          <boxGeometry args={[1.25, 0.3, 1.25]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.78} />
        </mesh>
        <mesh castShadow receiveShadow position={[2.05, 1.52, 0.7]}>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.72} />
        </mesh>
        <mesh castShadow receiveShadow position={[2.05, 2.3, 0.7]}>
          <coneGeometry args={[0.36, 0.78, 6]} />
          <meshStandardMaterial color="#1f2937" roughness={0.82} />
        </mesh>
        <Sparkles
          count={14}
          scale={[6, 3, 6]}
          position={[0.3, 2.8, 0.3]}
          size={3}
          speed={0.28}
          color="#bef264"
        />
      </Float>
    </group>
  )
}
