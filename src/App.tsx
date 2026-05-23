import './App.css'

const projects = [
  {
    title: 'HEZA Platforms',
    type: 'Production web systems',
    description:
      'Core React, Node.js, Django and Flask platforms for workshops, events, dashboards and operational workflows.',
    stack: ['React', 'Node.js', 'Django', 'Flask', 'SQL'],
  },
  {
    title: 'OmniStoreSaaS',
    type: 'Multi-tenant SaaS architecture',
    description:
      'A commerce platform foundation built with React, Express, Supabase, Stripe, Cloudflare routing and AWS infrastructure.',
    stack: ['React', 'Express', 'Supabase', 'Stripe', 'AWS'],
  },
  {
    title: 'AI Reporting Workflows',
    type: 'AI-assisted operations',
    description:
      'Python and OpenAI-powered reporting tools that simplify operational queries, metrics and fiscal validation workflows.',
    stack: ['Python', 'OpenAI APIs', 'Pandas', 'SQL Server'],
  },
  {
    title: 'Computer Vision Utilities',
    type: 'Automation and CV',
    description:
      'Internal computer vision utilities for facial recognition, coin detection and advanced image processing automation.',
    stack: ['OpenCV', 'TensorFlow', 'NumPy', 'Python'],
  },
]

const experience = [
  {
    role: 'Development Engineer',
    company: 'HEZA',
    years: '2025 - Present',
    summary:
      'Builds and maintains production platforms, internal dashboards, CRM workflows, AI-assisted reporting systems and Linux-based deployments.',
  },
  {
    role: 'Full Stack Developer',
    company: 'MaximizeAI',
    years: '2024 - 2025',
    summary:
      'Delivered hotel automation workflows, chatbot systems, scraping pipelines, performance improvements and backend microservices.',
  },
  {
    role: 'New Product Introduction Engineer',
    company: 'Foxconn',
    years: '2022 - 2025',
    summary:
      'Created Python dashboards, KPI tracking tools, SQL optimizations and automated engineering reports for industrial teams.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Wisscrow',
    years: '2020 - 2022',
    summary:
      'Maintained Laravel applications through migrations and built a local ATM-oriented desktop application in C#.',
  },
]

const skillGroups = [
  ['Backend', 'Python', 'Django', 'Flask', 'FastAPI', 'Node.js', 'Laravel'],
  ['Frontend', 'React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  ['Data', 'PostgreSQL', 'SQL Server', 'MySQL', 'Supabase', 'Query Optimization'],
  ['Cloud', 'AWS EC2', 'Docker', 'Linux VPS', 'Vercel', 'Cloudflare', 'GitHub Actions'],
  ['AI & Automation', 'OpenAI APIs', 'TensorFlow', 'OpenCV', 'Selenium', 'BeautifulSoup'],
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Gilberto Gonzalez home">
          GG
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="role">Senior Full Stack & AI Systems Engineer</p>
            <h1>Gilberto Gonzalez</h1>
            <p className="hero-text">
              I build scalable web platforms, AI-assisted workflows, desktop automation tools,
              SaaS systems and production cloud applications for teams that need software to move
              real operational data with precision.
            </p>
            <div className="hero-actions" aria-label="Main actions">
              <a className="button button-primary" href="mailto:gilbertoglez1999@hotmail.com">
                Start a conversation
              </a>
              <a className="button button-secondary" href="/CV_Gilberto_Gonzalez_EN_Final.pdf">
                Download CV
              </a>
            </div>
          </div>

          <div className="system-panel" aria-label="Systems engineering focus">
            <div className="panel-header">
              <span>systems map</span>
              <span>production-ready</span>
            </div>
            <div className="signal-grid" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="pipeline">
              <div>
                <strong>01</strong>
                <span>Web platforms</span>
              </div>
              <div>
                <strong>02</strong>
                <span>AI workflows</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Data automation</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Cloud delivery</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell intro" aria-label="Professional summary">
          <p>
            Based in Jalisco, Mexico, I combine product engineering, backend systems, automation
            and infrastructure work across Unix/Linux environments, relational databases and
            AI-assisted tooling.
          </p>
        </section>

        <section className="section-shell section-block" id="work">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>Systems built around automation, clarity and scale.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>From industrial dashboards to SaaS and AI-enabled operations.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
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

        <section className="section-shell section-block" id="stack">
          <div className="section-heading">
            <span>Technical stack</span>
            <h2>Full-stack delivery with strong data, cloud and AI foundations.</h2>
          </div>
          <div className="stack-list">
            {skillGroups.map(([group, ...items]) => (
              <article className="stack-row" key={group}>
                <h3>{group}</h3>
                <p>{items.join(' / ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div>
            <span>Contact</span>
            <h2>Let's build a system that earns its place in production.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:gilbertoglez1999@hotmail.com">gilbertoglez1999@hotmail.com</a>
            <a href="https://linkedin.com/in/gilbertoglez" target="_blank" rel="noreferrer">
              linkedin.com/in/gilbertoglez
            </a>
            <a href="/CV_Gilberto_Gonzalez_EN_Final.pdf">Download CV</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
