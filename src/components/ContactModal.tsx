import type { PortfolioContent } from '../types/portfolio'

type ContactModalProps = {
  content: PortfolioContent
  whatsappHref: string
  onClose: () => void
}

export function ContactModal({ content, whatsappHref, onClose }: ContactModalProps) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-copy"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label={content.modal.close} onClick={onClose}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <div>
          <p>{content.contactLabel}</p>
          <h2 id="contact-modal-title">{content.modal.title}</h2>
          <span id="contact-modal-copy">{content.modal.text}</span>
        </div>
        <div className="modal-options">
          <a href={`mailto:${content.email}?subject=${encodeURIComponent(content.modal.subject)}`} onClick={onClose}>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <strong>{content.modal.email}</strong>
            <small>{content.email}</small>
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={onClose}>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7.5 19.5 4 20l.7-3.2A8.2 8.2 0 1 1 8 20.1z" />
                <path d="M9 8.7c.4 3.1 2.2 5 5.3 5.6l1.2-1.2 2.1.6c.4.1.7.5.6 1l-.3 1.7c-.1.5-.5.8-1 .8-5.6-.2-10-4.5-10.2-10.2 0-.5.3-.9.8-1l1.7-.3c.5-.1.9.2 1 .6l.6 2.1z" />
              </svg>
            </span>
            <strong>{content.modal.whatsapp}</strong>
            <small>{content.modal.whatsappPending}</small>
          </a>
        </div>
      </section>
    </div>
  )
}
