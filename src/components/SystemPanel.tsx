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
        {content.systemCards.map((card, index) => (
          <article className="signal-card" key={card.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>
      <div className="pipeline">
        {content.pipeline.map((item, index) => (
          <div key={item}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
