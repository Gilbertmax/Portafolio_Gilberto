import type { PortfolioContent } from '../types/portfolio'

type StackSectionProps = {
  content: PortfolioContent
}

export function StackSection({ content }: StackSectionProps) {
  return (
    <section className="section-shell section-block" id="stack">
      <div className="section-heading" data-reveal="up">
        <span>{content.stackLabel}</span>
        <h2>{content.stackTitle}</h2>
      </div>
      <div className="stack-list">
        {content.skillGroups.map((skillGroup) => (
          <article className="stack-row" key={skillGroup.group} data-reveal="up">
            <h3>{skillGroup.group}</h3>
            <ul>
              {skillGroup.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="education" data-reveal="up">
        <strong>{content.educationLabel}:</strong> {content.education}
      </p>
    </section>
  )
}
