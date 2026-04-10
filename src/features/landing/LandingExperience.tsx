import type { LandingFeatureProps } from './types'
import { LandingPreviewScene } from './components/LandingPreviewScene'

export function LandingExperience({ onStart }: LandingFeatureProps) {
  return <LandingPreviewScene onStart={onStart} />
}
