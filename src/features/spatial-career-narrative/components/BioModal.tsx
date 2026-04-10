import { bioContent } from '../constants'

export function BioModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) {
    return null
  }

  return (
    <section className="bio-modal-backdrop" aria-modal="true" role="dialog">
      <article className="bio-modal">
        <div className="bio-modal-head">
          <p className="bio-kicker">{bioContent.eyebrow}</p>
          <button className="bio-close" onClick={onClose} type="button" aria-label="Close bio">
            ×
          </button>
        </div>
        <h2>{bioContent.title}</h2>
        <p>{bioContent.description}</p>
      </article>
    </section>
  )
}
