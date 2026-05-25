import type { PortfolioContent } from '../types/portfolio'

type ContactSectionProps = {
  content: PortfolioContent
  cvLink: string
  onContactOpen: () => void
}

export function ContactSection({ content, cvLink, onContactOpen }: ContactSectionProps) {
  return (
    <section className="contact section-shell" id="contact">
      <div data-reveal="left">
        <span>{content.contactLabel}</span>
        <h2>{content.contactTitle}</h2>
      </div>
      <div className="contact-links" data-reveal="right">
        <button type="button" onClick={onContactOpen}>
          {content.primaryCta}
        </button>
        <a href={`mailto:${content.email}`}>{content.email}</a>
        <a href="https://linkedin.com/in/gilbertoglez" target="_blank" rel="noreferrer">
          {content.linkedin}
        </a>
        <a href="https://github.com/Gilbertmax" target="_blank" rel="noreferrer">
          {content.github}
        </a>
        <a href={cvLink}>{content.cvCta}</a>
      </div>
    </section>
  )
}
