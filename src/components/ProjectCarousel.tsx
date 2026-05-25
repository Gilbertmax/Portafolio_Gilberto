import type { Language, PortfolioContent, Project } from '../types/portfolio'

type ProjectCarouselProps = {
  content: PortfolioContent
  language: Language
  projectPage: number
  projectPageCount: number
  projectPages: Project[][]
  onPageChange: (updater: number | ((page: number) => number)) => void
  onPauseChange: (isPaused: boolean) => void
}

export function ProjectCarousel({
  content,
  language,
  projectPage,
  projectPageCount,
  projectPages,
  onPageChange,
  onPauseChange,
}: ProjectCarouselProps) {
  return (
    <section className="section-shell section-block" id="work">
      <div className="section-heading section-heading-with-controls" data-reveal="up">
        <div>
          <span>{content.workLabel}</span>
          <h2>{content.workTitle}</h2>
        </div>
        <div className="carousel-controls" aria-label={language === 'en' ? 'Project carousel controls' : 'Controles del carrusel de proyectos'}>
          <p>
            {content.carousel.showing} {projectPage + 1} {content.carousel.of} {projectPageCount}
          </p>
          <div>
            <button
              type="button"
              aria-label={content.carousel.previous}
              onClick={() => onPageChange((page) => (page === 0 ? projectPageCount - 1 : page - 1))}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={content.carousel.next}
              onClick={() => onPageChange((page) => (page + 1) % projectPageCount)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="project-carousel"
        aria-live="polite"
        data-reveal="up"
        onMouseEnter={() => onPauseChange(true)}
        onMouseLeave={() => onPauseChange(false)}
        onFocus={() => onPauseChange(true)}
        onBlur={() => onPauseChange(false)}
      >
        <div className="project-track" style={{ transform: `translateX(-${projectPage * 100}%)` }}>
          {projectPages.map((page, pageIndex) => (
            <div className="project-slide" key={pageIndex} aria-hidden={projectPage !== pageIndex}>
              {page.map((project) => (
                <article className="project-card" key={project.title}>
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="impact">
                    <strong>{language === 'en' ? 'Impact' : 'Impacto'}</strong>
                    <span>{project.impact}</span>
                  </div>
                  <ul aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-dots" aria-label={language === 'en' ? 'Project pagination' : 'Paginación de proyectos'}>
        {Array.from({ length: projectPageCount }, (_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`${content.carousel.page} ${index + 1}`}
            aria-current={projectPage === index ? 'page' : undefined}
            onClick={() => onPageChange(index)}
          />
        ))}
      </div>
    </section>
  )
}
