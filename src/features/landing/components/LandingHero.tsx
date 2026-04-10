import { landingCopy } from '../styles'
import { GlowButton } from '../../../shared/ui'

export function LandingHero({ onStart }: { onStart: () => void }) {
  return (
    <section className="landing-hero">
      <p className="landing-eyebrow">{landingCopy.eyebrow}</p>
      <h1>{landingCopy.title}</h1>
      <p className="landing-copy">{landingCopy.description}</p>
      <div className="landing-actions">
        <GlowButton onClick={onStart} type="button">
          {landingCopy.cta}
        </GlowButton>
        <p className="landing-helper">{landingCopy.helper}</p>
      </div>
    </section>
  )
}
