import type { Language, PortfolioContent } from '../types/portfolio'

type CapabilitiesSectionProps = {
  content: PortfolioContent
  language: Language
  capabilityIndex: number
  onCapabilityChange: (index: number) => void
}

export function CapabilitiesSection({ content, language, capabilityIndex, onCapabilityChange }: CapabilitiesSectionProps) {
  const activeCapability = content.capabilities[capabilityIndex]

  return (
    <section className="section-shell section-block" id="capabilities">
      <div className="section-heading" data-reveal="up">
        <span>{content.capabilitiesLabel}</span>
        <h2>{content.capabilitiesTitle}</h2>
      </div>
      <div className="capability-showcase" data-reveal="up">
        <div className="capability-rail" aria-label={language === 'en' ? 'Capability selector' : 'Selector de capacidades'}>
          {content.capabilities.map((capability, index) => (
            <button
              type="button"
              key={capability.title}
              aria-pressed={capabilityIndex === index}
              onClick={() => onCapabilityChange(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {capability.title}
            </button>
          ))}
        </div>
        <article className="capability-feature" aria-live="polite">
          <p>{language === 'en' ? 'Current focus' : 'Enfoque actual'}</p>
          <h3>{activeCapability.title}</h3>
          <span>{activeCapability.text}</span>
          <ul>
            {activeCapability.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
