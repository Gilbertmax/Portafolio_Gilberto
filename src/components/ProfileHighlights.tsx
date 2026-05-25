import type { Language, PortfolioContent } from '../types/portfolio'

type ProfileHighlightsProps = {
  content: PortfolioContent
  language: Language
}

export function ProfileHighlights({ content, language }: ProfileHighlightsProps) {
  return (
    <>
      <section
        className="section-shell intro"
        aria-label={language === 'en' ? 'Professional summary' : 'Resumen profesional'}
        data-reveal="up"
      >
        <p>{content.intro}</p>
      </section>

      <section className="profile-strip section-shell" aria-label={language === 'en' ? 'Profile highlights' : 'Puntos clave del perfil'}>
        {content.profileHighlights.map((item, index) => (
          <article className="profile-note" key={item.label} data-reveal="up">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{item.label}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </>
  )
}
