import { useEffect, useRef } from 'react'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { leaderStart } from '../constants'
import { characterPalette, narrativeTheme } from '../styles'
import { Character } from './Character'

const tmpVecA = new THREE.Vector3()
const tmpVecB = new THREE.Vector3()
const tmpVecC = new THREE.Vector3()
const upAxis = new THREE.Vector3(0, 1, 0)

function moveFollower(
  character: THREE.Group,
  destination: THREE.Vector3,
  facingDirection: THREE.Vector3,
  duration: number,
) {
  gsap.to(character.position, {
    duration,
    x: destination.x,
    y: destination.y,
    z: destination.z,
    ease: 'sine.out',
    overwrite: 'auto',
  })

  gsap.to(character.rotation, {
    duration: 0.42,
    y: Math.atan2(facingDirection.x, facingDirection.z),
    ease: 'power2.out',
    overwrite: 'auto',
  })
}

export function Squad({
  targetPosition,
  onGroupCenterChange,
}: {
  targetPosition: THREE.Vector3
  onGroupCenterChange: (center: THREE.Vector3) => void
}) {
  const leaderRef = useRef<THREE.Group>(null)
  const followerOneRef = useRef<THREE.Group>(null)
  const followerTwoRef = useRef<THREE.Group>(null)
  const followerTick = useRef(0)
  const leaderDirection = useRef(new THREE.Vector3(0, 0, 1))
  const lastLeaderPosition = useRef(leaderStart.clone())
  const movementTargetRef = useRef(targetPosition.clone())
  const keyStateRef = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  })

  useEffect(() => {
    movementTargetRef.current.copy(targetPosition)
  }, [targetPosition])

  useEffect(() => {
    const onKeyChange = (event: KeyboardEvent, pressed: boolean) => {
      if (event.repeat) {
        return
      }

      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          keyStateRef.current.forward = pressed
          break
        case 'KeyS':
        case 'ArrowDown':
          keyStateRef.current.backward = pressed
          break
        case 'KeyA':
        case 'ArrowLeft':
          keyStateRef.current.left = pressed
          break
        case 'KeyD':
        case 'ArrowRight':
          keyStateRef.current.right = pressed
          break
        default:
          break
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => onKeyChange(event, true)
    const handleKeyUp = (event: KeyboardEvent) => onKeyChange(event, false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame((state, delta) => {
    const leader = leaderRef.current
    const followerOne = followerOneRef.current
    const followerTwo = followerTwoRef.current

    if (!leader || !followerOne || !followerTwo) {
      return
    }

    const keyState = keyStateRef.current
    const moveIntent = tmpVecC.set(
      Number(keyState.right) - Number(keyState.left),
      0,
      Number(keyState.backward) - Number(keyState.forward),
    )

    if (moveIntent.lengthSq() > 0) {
      moveIntent.normalize()
      const step = moveIntent.multiplyScalar(delta * 8.5)
      leader.position.add(step)
      leader.position.y = narrativeTheme.leaderHeight
      movementTargetRef.current.copy(leader.position)
      leaderDirection.current.copy(moveIntent).normalize()

      gsap.to(leader.rotation, {
        duration: 0.18,
        y: Math.atan2(leaderDirection.current.x, leaderDirection.current.z),
        ease: 'power2.out',
        overwrite: 'auto',
      })
    } else {
      leader.position.lerp(movementTargetRef.current, 0.08)
      leader.position.y = narrativeTheme.leaderHeight
    }

    const travel = tmpVecA.subVectors(leader.position, lastLeaderPosition.current)
    if (travel.lengthSq() > 0.00002) {
      leaderDirection.current.copy(travel).normalize()
      lastLeaderPosition.current.copy(leader.position)
    }

    followerTick.current += delta
    if (followerTick.current > 0.12) {
      followerTick.current = 0
      const side = tmpVecB.copy(leaderDirection.current).cross(upAxis).normalize()
      const wobble = Math.sin(state.clock.elapsedTime * 2.4) * 0.24
      const behind = tmpVecC.copy(leaderDirection.current).multiplyScalar(-1.9)

      const followerOneTarget = leader.position
        .clone()
        .add(behind)
        .add(side.clone().multiplyScalar(-1.08 + wobble))
      followerOneTarget.y = narrativeTheme.leaderHeight

      const followerTwoTarget = leader.position
        .clone()
        .add(behind.clone().multiplyScalar(1.22))
        .add(side.clone().multiplyScalar(1.08 - wobble))
      followerTwoTarget.y = narrativeTheme.leaderHeight

      moveFollower(followerOne, followerOneTarget, leaderDirection.current, 0.72)
      moveFollower(followerTwo, followerTwoTarget, leaderDirection.current, 0.84)
    }

    const center = leader.position
      .clone()
      .add(followerOne.position)
      .add(followerTwo.position)
      .multiplyScalar(1 / 3)

    onGroupCenterChange(center)
  })

  return (
    <group>
      <group ref={leaderRef} position={leaderStart.toArray()}>
        <Float speed={2.2} floatIntensity={0.24} rotationIntensity={0.08}>
          <Character {...characterPalette.khurram} name="Khurram" />
        </Float>
      </group>
      <group ref={followerOneRef} position={[-15.8, 1, 7.4]}>
        <Float speed={2.6} floatIntensity={0.18} rotationIntensity={0.06}>
          <Character {...characterPalette.shazain} name="Shazain" />
        </Float>
      </group>
      <group ref={followerTwoRef} position={[-13.1, 1, 7.9]}>
        <Float speed={2.8} floatIntensity={0.18} rotationIntensity={0.06}>
          <Character {...characterPalette.zaynah} name="Zaynah" />
        </Float>
      </group>
    </group>
  )
}
