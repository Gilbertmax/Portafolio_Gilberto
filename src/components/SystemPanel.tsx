import type { Language, PortfolioContent } from '../types/portfolio'

type SystemPanelProps = {
  content: PortfolioContent
  language: Language
}

export function SystemPanel({ content, language }: SystemPanelProps) {
  return (
    <div className="system-panel" aria-label={content.aria.focus}>
      <div className="panel-header">
        <span>{content.panelTop[0]}</span>
        <span>{content.panelTop[1]}</span>
      </div>
      <div className="profile-module">
        <img src="/yo.png" alt={language === 'en' ? 'Gilberto Gonzalez portrait' : 'Retrato de Gilberto Gonzalez'} />
        <div>
          <strong>{content.name}</strong>
          <span>{language === 'en' ? 'Full stack systems builder' : 'Constructor de sistemas full stack'}</span>
        </div>
      </div>
      <div className="signal-grid">
        {content.systemCards.map((card) => (
          <article className="signal-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>
      <div className="pipeline">
        {content.pipeline.map((item) => (
          <div key={item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
