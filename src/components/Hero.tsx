import type { Language, PortfolioContent } from '../types/portfolio'
import { SystemPanel } from './SystemPanel'

type HeroProps = {
  content: PortfolioContent
  cvLink: string
  language: Language
  onContactOpen: () => void
}

export function Hero({ content, cvLink, language, onContactOpen }: HeroProps) {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="role">{content.role}</p>
        <h1>{content.name}</h1>
        <p className="hero-text">{content.hero}</p>
        <div className="hero-actions" aria-label={content.aria.actions}>
          <button className="button button-primary" type="button" onClick={onContactOpen}>
            {content.primaryCta}
          </button>
          <a className="button button-secondary" href={cvLink}>
            {content.cvCta}
          </a>
        </div>
      </div>
      <SystemPanel content={content} language={language} />
    </section>
  )
}
