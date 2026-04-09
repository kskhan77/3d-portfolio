import { useRef, type ElementRef, type RefObject } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CameraRig({ targetRef }: { targetRef: RefObject<THREE.Vector3> }) {
  const controlsRef = useRef<ElementRef<typeof OrbitControls>>(null)
  const smoothedTargetRef = useRef<THREE.Vector3 | null>(null)

  useFrame(() => {
    const controls = controlsRef.current
    const target = targetRef.current
    if (!controls || !target) {
      return
    }

    if (!smoothedTargetRef.current) {
      smoothedTargetRef.current = target.clone()
      controls.target.copy(target)
      return
    }

    const previousTarget = smoothedTargetRef.current.clone()
    smoothedTargetRef.current.lerp(target, 0.12)
    const delta = smoothedTargetRef.current.clone().sub(previousTarget)

    controls.object.position.add(delta)
    controls.target.copy(smoothedTargetRef.current)
    controls.update()
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minDistance={11}
      maxDistance={30}
      minPolarAngle={0.45}
      maxPolarAngle={1.3}
    />
  )
}
