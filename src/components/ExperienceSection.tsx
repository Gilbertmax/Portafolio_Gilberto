import type { PortfolioContent } from '../types/portfolio'

type ExperienceSectionProps = {
  content: PortfolioContent
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section className="section-shell section-block" id="experience">
      <div className="section-heading">
        <span>{content.experienceLabel}</span>
        <h2>{content.experienceTitle}</h2>
      </div>
      <div className="timeline">
        {content.experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <time>{item.years}</time>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
