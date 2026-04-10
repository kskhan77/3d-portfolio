import { useEffect, useState } from 'react'
import { worldEnvironmentObject, type WorldEnvironmentValues } from '../theatre'

let theatreStudioInitialized = false

const defaultWorldEnvironmentValues: WorldEnvironmentValues = {
  ambientIntensity: 0.9,
  hemisphereIntensity: 0.8,
  directionalIntensity: 2.4,
  fogNear: 28,
  fogFar: 70,
  shadowOpacity: 0.42,
  trailArcHeight: 2.6,
  trailThickness: 0.06,
  sparkleSpeed: 0.14,
  worldFloat: 1,
}

export function useTheatreWorldController() {
  const [values, setValues] = useState<WorldEnvironmentValues>(defaultWorldEnvironmentValues)

  useEffect(() => {
    let unsubscribe: (() => void) | undefined

    const initialize = async () => {
      if (import.meta.env.DEV && typeof window !== 'undefined' && !theatreStudioInitialized) {
        const studioModule = await import('@theatre/studio')
        const studio = studioModule.default
        studio.initialize()
        theatreStudioInitialized = true
      }

      setValues(worldEnvironmentObject.value)
      unsubscribe = worldEnvironmentObject.onValuesChange((nextValues) => {
        setValues(nextValues)
      })
    }

    void initialize()

    return () => {
      unsubscribe?.()
    }
  }, [])

  return values
}
