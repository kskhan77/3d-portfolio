import { useEffect, useRef } from 'react'
import Ecctrl, { type CustomEcctrlRigidBody } from 'ecctrl'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { leaderStart } from '../constants'
import { characterPalette } from '../styles'
import { Character } from './Character'

const tmpVecA = new THREE.Vector3()

export function Squad({
  teleportTarget,
  teleportVersion,
  onGroupCenterChange,
}: {
  teleportTarget: THREE.Vector3
  teleportVersion: number
  onGroupCenterChange: (center: THREE.Vector3) => void
}) {
  const leaderControllerRef = useRef<CustomEcctrlRigidBody>(null)

  useEffect(() => {
    const rigidBody = leaderControllerRef.current?.group
    if (!rigidBody) {
      return
    }

    rigidBody.setTranslation(
      { x: teleportTarget.x, y: teleportTarget.y, z: teleportTarget.z },
      true,
    )
    rigidBody.setLinvel({ x: 0, y: 0, z: 0 }, true)
  }, [teleportTarget, teleportVersion])

  useFrame(() => {
    const rigidBody = leaderControllerRef.current?.group

    if (!rigidBody) {
      return
    }

    const translation = rigidBody.translation()
    const leaderPosition = tmpVecA.set(translation.x, translation.y, translation.z)
    onGroupCenterChange(leaderPosition.clone())
  })

  return (
    <group>
      <Ecctrl
        ref={leaderControllerRef}
        position={leaderStart.toArray()}
        mode="FixedCamera"
        camInitDis={-5.6}
        camMaxDis={-7.8}
        camMinDis={-3.2}
        camUpLimit={1}
        camLowLimit={-0.9}
        camCollisionOffset={0.55}
        camCollisionSpeedMult={6}
        camFollowMult={14}
        camLerpMult={18}
        turnSpeed={12}
        turnVelMultiplier={0.42}
        maxVelLimit={3.2}
        sprintMult={1.8}
        jumpVel={4.2}
        dragDampingC={0.22}
        accDeltaTime={18}
        airDragMultiplier={0.12}
        fallingGravityScale={3.1}
        moveImpulsePointY={0.34}
        springK={2.1}
        dampingC={0.2}
        autoBalanceSpringK={0.45}
        autoBalanceDampingC={0.06}
        camCollision
        friction={2.2}
        floatHeight={0.16}
        capsuleHalfHeight={0.46}
        capsuleRadius={0.34}
      >
        <Character {...characterPalette.khurram} name="Khurram" />
      </Ecctrl>
    </group>
  )
}
