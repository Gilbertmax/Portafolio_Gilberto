import type { Language, PortfolioContent } from '../types/portfolio'

export const cvLinks: Record<Language, string> = {
  en: '/CV_GilbertoGonzalez.pdf',
  es: '/CV_Gilberto_Gonzalez.pdf',
}

export const whatsappNumber = '523921213634'

export const content: Record<Language, PortfolioContent> = {
  en: {
    skip: 'Skip to content',
    nav: ['Work', 'Capabilities', 'Experience', 'Stack', 'Contact'],
    aria: {
      nav: 'Primary navigation',
      language: 'Language selector',
      actions: 'Main actions',
      focus: 'Systems engineering focus',
    },
    role: 'Senior Full Stack & AI Systems Engineer',
    name: 'Gilberto Gonzalez',
    hero:
      'I build production software for teams whose work depends on messy operational data: internal platforms, AI-assisted reporting, automation tools, SaaS foundations and Linux-based deployments.',
    primaryCta: 'Start a conversation',
    cvCta: 'Download English CV',
    modal: {
      title: 'How would you like to talk?',
      text: 'Choose the channel that works best for you. I usually reply fastest through WhatsApp during business hours.',
      email: 'Send email',
      whatsapp: 'WhatsApp',
      whatsappPending: 'Open direct chat',
      close: 'Close dialog',
      subject: 'Portfolio conversation',
      whatsappMessage: 'Hi Gilberto, I saw your portfolio and would like to talk.',
    },
    profileHighlights: [
      {
        label: 'Product to production',
        text: 'Interfaces, APIs, databases and deployments handled as one system, not separate pieces.',
      },
      {
        label: 'Operations-first thinking',
        text: 'Reporting, fiscal validation, CRM operations, dashboards and file handling shaped around daily work.',
      },
      {
        label: 'AI with practical edges',
        text: 'AI applied where it removes friction: query helpers, chatbot flows, document extraction and reporting.',
      },
    ],
    carousel: {
      previous: 'Previous projects',
      next: 'Next projects',
      page: 'Project page',
      showing: 'Showing',
      of: 'of',
    },
    panelTop: ['systems map', 'production-ready'],
    pipeline: ['Web platforms', 'AI workflows', 'Data automation', 'Cloud delivery'],
    systemCards: [
      { title: 'Product UI', detail: 'React, Tailwind, dashboards' },
      { title: 'APIs', detail: 'Python, Node, REST services' },
      { title: 'Data Work', detail: 'SQL, Supabase, reporting' },
      { title: 'AI Flows', detail: 'OpenAI, chatbots, reports' },
      { title: 'Operations', detail: 'Excel, PDFs, scraping' },
      { title: 'Delivery', detail: 'AWS, Docker, Linux' },
    ],
    intro:
      'My strongest work sits between software engineering and operations: understanding how a team really works, then turning that process into a reliable application, workflow or automation layer.',
    workLabel: 'Selected work',
    workTitle: 'Production work across platforms, automation and AI-enabled operations.',
    projects: [
      {
        title: 'HEZA Platforms',
        type: 'Operational web platforms',
        description:
          'Development and maintenance of heza.com.mx and cedet.heza.com.mx, including React interfaces, Node.js services, Django and Flask backends, Tailwind UI, Axios integrations and relational database workflows.',
        impact:
          'Supports workshops, events, internal metrics, CRM workflows, reporting processes and production web operations.',
        stack: ['React', 'Node.js', 'Django', 'Flask', 'Tailwind CSS', 'Axios', 'SQL'],
      },
      {
        title: 'Operational AI Reporting',
        type: 'AI-assisted data workflows',
        description:
          'Python-driven reporting flows and contextual chatbot integrations using OpenAI APIs to simplify operational query generation, reporting and validation tasks.',
        impact:
          'Turns repetitive operational questions into faster, structured workflows that can connect to SQL-backed business data.',
        stack: ['Python', 'OpenAI APIs', 'Pandas', 'SQL Server', 'PostgreSQL'],
      },
      {
        title: 'Automation Tooling',
        type: 'Desktop and document automation',
        description:
          'Tools for Excel processing, multi-source file unification, payroll receipt extraction, PDF processing, fiscal obligation validation and dynamic database operations.',
        impact:
          'Reduces manual back-office work by automating file searches, extraction, audit validation and reporting pipelines.',
        stack: ['Python', 'Pandas', 'PDF processing', 'Excel automation', 'SQL'],
      },
      {
        title: 'OmniStoreSaaS',
        type: 'Multi-tenant SaaS architecture',
        description:
          'A commerce platform foundation designed with multi-tenant architecture, secure routing, payments and cloud deployment patterns.',
        impact:
          'Combines application architecture, authentication-sensitive flows, payments and cloud infrastructure into a reusable SaaS base.',
        stack: ['React', 'Express.js', 'Supabase', 'Stripe', 'Cloudflare', 'AWS'],
      },
      {
        title: 'Computer Vision Utilities',
        type: 'AI and image processing',
        description:
          'Computer vision utilities for facial recognition, coin detection, image manipulation, compression, cropping, watermarking and automated uploads.',
        impact:
          'Applies practical AI and image-processing techniques to automate visual workflows and asset-heavy production tasks.',
        stack: ['OpenCV', 'TensorFlow', 'NumPy', 'Python', 'Image processing'],
      },
      {
        title: 'Industrial Dashboards',
        type: 'Analytics and KPI tracking',
        description:
          'Python dashboards and reporting pipelines for industrial KPI tracking, engineering metrics, real-time project progress and centralized operational monitoring.',
        impact:
          'Gives engineering teams clearer visibility into milestones, tasks, deliverables and operational performance.',
        stack: ['Python', 'Pandas', 'SQL', 'Excel automation', 'Dashboards'],
      },
    ],
    capabilitiesLabel: 'Capabilities',
    capabilitiesTitle: 'What I can own end to end.',
    capabilities: [
      {
        title: 'Full-stack product engineering',
        text: 'I can move from frontend interfaces to backend APIs, authentication, relational data modeling and deployment without losing the product context.',
        proof: ['React applications', 'REST APIs', 'JWT authentication', 'CRM and dashboard workflows'],
      },
      {
        title: 'AI-assisted automation',
        text: 'I use Python, OpenAI APIs and data tooling to turn manual operational work into repeatable workflows, internal assistants and reporting systems.',
        proof: ['Contextual chatbots', 'Report generation', 'Operational query helpers', 'Document extraction'],
      },
      {
        title: 'Data and process systems',
        text: 'I work close to business data: SQL optimization, multi-source file processing, fiscal validation, metrics tracking and structured reporting.',
        proof: ['PostgreSQL', 'SQL Server', 'MySQL', 'Pandas', 'Excel automation'],
      },
      {
        title: 'Production infrastructure',
        text: 'I deploy and operate applications on Linux environments, VPS infrastructure and cloud platforms with SSL, SSH, performance and delivery concerns in mind.',
        proof: ['Linux VPS', 'AWS EC2', 'Docker', 'Cloudflare', 'Vercel', 'GitHub Actions'],
      },
    ],
    experienceLabel: 'Experience',
    experienceTitle: 'A career shaped by real systems, not isolated demos.',
    experience: [
      {
        role: 'Development Engineer',
        company: 'HEZA',
        years: '2025 - Present',
        summary:
          'Builds and maintains core platforms, internal dashboards, CRM tools, AI-assisted reporting workflows, fiscal validation dashboards and production Unix/Linux deployments.',
      },
      {
        role: 'Full Stack Developer',
        company: 'MaximizeAI',
        years: '2024 - 2025',
        summary:
          'Delivered hotel automation workflows, chatbot systems, MySQL persistence, large-scale scraping, image-processing pipelines and Flask/FastAPI microservices.',
      },
      {
        role: 'New Product Introduction Engineer',
        company: 'Foxconn',
        years: '2022 - 2025',
        summary:
          'Created analytical dashboards, KPI tracking tools, SQL optimizations, Pandas pipelines and automated reporting for engineering and operational teams.',
      },
      {
        role: 'Full Stack Developer',
        company: 'Wisscrow',
        years: '2020 - 2022',
        summary:
          'Maintained and modernized Laravel applications and developed a robust local ATM-oriented desktop application in C#.',
      },
    ],
    stackLabel: 'Technical stack',
    stackTitle: 'Tools I use to ship complete systems.',
    skillGroups: [
      {
        group: 'Backend',
        items: ['Python', 'Django', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs'],
      },
      {
        group: 'Frontend',
        items: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Hooks', 'Axios', 'HTML', 'CSS'],
      },
      {
        group: 'Databases',
        items: ['SQL', 'PostgreSQL', 'SQL Server', 'MySQL', 'Supabase', 'Query optimization'],
      },
      {
        group: 'Cloud and DevOps',
        items: [
          'AWS EC2',
          'Docker',
          'Linux VPS',
          'Ubuntu Server',
          'Windows Server',
          'Cloudflare',
          'Vercel',
          'GitHub Actions',
          'SSH',
          'SSL deployment',
        ],
      },
      {
        group: 'AI and Automation',
        items: ['OpenAI APIs', 'TensorFlow', 'OpenCV', 'Selenium', 'BeautifulSoup', 'Pandas', 'NumPy', 'Chatbot integrations'],
      },
    ],
    educationLabel: 'Education',
    education: 'Bachelor’s Degree in Computer Engineering, Universidad de Guadalajara, 2018 - 2023.',
    contactLabel: 'Contact',
    contactTitle: "Let's build a system that earns its place in production.",
    email: 'gilbertoglez1999@hotmail.com',
    linkedin: 'linkedin.com/in/gilbertoglez',
    github: 'github.com/Gilbertmax',
  },
  es: {
    skip: 'Saltar al contenido',
    nav: ['Trabajo', 'Capacidades', 'Experiencia', 'Stack', 'Contacto'],
    aria: {
      nav: 'Navegación principal',
      language: 'Selector de idioma',
      actions: 'Acciones principales',
      focus: 'Enfoque de ingeniería de sistemas',
    },
    role: 'Senior Full Stack & AI Systems Engineer',
    name: 'Gilberto Gonzalez',
    hero:
      'Construyo software en producción para equipos que dependen de datos operativos complejos: plataformas internas, reportes asistidos por IA, automatización, bases SaaS y despliegues sobre Linux.',
    primaryCta: 'Iniciar conversación',
    cvCta: 'Descargar CV en español',
    modal: {
      title: '¿Cómo prefieres hablar?',
      text: 'Elige el canal que te funcione mejor. Normalmente respondo más rápido por WhatsApp en horario laboral.',
      email: 'Enviar email',
      whatsapp: 'WhatsApp',
      whatsappPending: 'Abrir chat directo',
      close: 'Cerrar diálogo',
      subject: 'Conversación desde portafolio',
      whatsappMessage: 'Hola Gilberto, vi tu portafolio y me gustaría conversar.',
    },
    profileHighlights: [
      {
        label: 'De producto a producción',
        text: 'Interfaces, APIs, bases de datos y despliegues tratados como un sistema completo, no como piezas aisladas.',
      },
      {
        label: 'Pensamiento operativo',
        text: 'Reportes, validación fiscal, CRM, dashboards y archivos diseñados alrededor del trabajo diario real.',
      },
      {
        label: 'IA con aplicación práctica',
        text: 'IA aplicada donde reduce fricción: asistentes de consulta, chatbots, extracción documental y reportes.',
      },
    ],
    carousel: {
      previous: 'Proyectos anteriores',
      next: 'Proyectos siguientes',
      page: 'Página de proyectos',
      showing: 'Mostrando',
      of: 'de',
    },
    panelTop: ['mapa de sistemas', 'listo para producción'],
    pipeline: ['Plataformas web', 'Flujos con IA', 'Automatización de datos', 'Entrega cloud'],
    systemCards: [
      { title: 'Producto UI', detail: 'React, Tailwind, dashboards' },
      { title: 'APIs', detail: 'Python, Node, REST' },
      { title: 'Datos', detail: 'SQL, Supabase, reportes' },
      { title: 'Flujos IA', detail: 'OpenAI, chatbots, reportes' },
      { title: 'Operación', detail: 'Excel, PDFs, scraping' },
      { title: 'Entrega', detail: 'AWS, Docker, Linux' },
    ],
    intro:
      'Mi mejor trabajo vive entre ingeniería de software y operación: entender cómo trabaja un equipo y convertir ese proceso en una aplicación, flujo o automatización confiable.',
    workLabel: 'Trabajo seleccionado',
    workTitle: 'Trabajo en producción sobre plataformas, automatización y operaciones con IA.',
    projects: [
      {
        title: 'Plataformas HEZA',
        type: 'Plataformas web operativas',
        description:
          'Desarrollo y mantenimiento de heza.com.mx y cedet.heza.com.mx con interfaces React, servicios Node.js, backends en Django y Flask, Tailwind UI, integraciones Axios y flujos con bases de datos relacionales.',
        impact:
          'Da soporte a talleres, eventos, métricas internas, flujos CRM, procesos de reporting y operación web en producción.',
        stack: ['React', 'Node.js', 'Django', 'Flask', 'Tailwind CSS', 'Axios', 'SQL'],
      },
      {
        title: 'Reportes Operativos con IA',
        type: 'Flujos de datos asistidos por IA',
        description:
          'Flujos de reporting en Python e integraciones de chatbots contextuales con APIs de OpenAI para simplificar generación de consultas, reportes y tareas de validación.',
        impact:
          'Convierte preguntas operativas repetitivas en flujos más rápidos y estructurados conectables a datos empresariales en SQL.',
        stack: ['Python', 'APIs de OpenAI', 'Pandas', 'SQL Server', 'PostgreSQL'],
      },
      {
        title: 'Herramientas de Automatización',
        type: 'Automatización documental y de escritorio',
        description:
          'Herramientas para procesamiento de Excel, unificación de múltiples fuentes, extracción de recibos de nómina, procesamiento de PDFs, validación fiscal y operaciones dinámicas con bases de datos.',
        impact:
          'Reduce trabajo manual administrativo automatizando búsquedas, extracción, validación de auditorías y pipelines de reportes.',
        stack: ['Python', 'Pandas', 'PDF processing', 'Excel automation', 'SQL'],
      },
      {
        title: 'OmniStoreSaaS',
        type: 'Arquitectura SaaS multi-tenant',
        description:
          'Base de plataforma de comercio diseñada con arquitectura multi-tenant, rutas seguras, pagos y patrones de despliegue en la nube.',
        impact:
          'Combina arquitectura de aplicación, flujos sensibles de autenticación, pagos e infraestructura cloud en una base SaaS reutilizable.',
        stack: ['React', 'Express.js', 'Supabase', 'Stripe', 'Cloudflare', 'AWS'],
      },
      {
        title: 'Utilidades de Visión Artificial',
        type: 'IA y procesamiento de imagen',
        description:
          'Utilidades de visión computacional para reconocimiento facial, detección de monedas, manipulación de imágenes, compresión, recorte, marcas de agua y cargas automatizadas.',
        impact:
          'Aplica IA práctica y procesamiento visual para automatizar flujos con imágenes y tareas de producción con muchos assets.',
        stack: ['OpenCV', 'TensorFlow', 'NumPy', 'Python', 'Image processing'],
      },
      {
        title: 'Dashboards Industriales',
        type: 'Analítica y seguimiento de KPIs',
        description:
          'Dashboards en Python y pipelines de reportes para seguimiento de KPIs industriales, métricas de ingeniería, progreso de proyectos y monitoreo operativo centralizado.',
        impact:
          'Da visibilidad a equipos de ingeniería sobre hitos, tareas, entregables y rendimiento operativo.',
        stack: ['Python', 'Pandas', 'SQL', 'Excel automation', 'Dashboards'],
      },
    ],
    capabilitiesLabel: 'Capacidades',
    capabilitiesTitle: 'Lo que puedo llevar de punta a punta.',
    capabilities: [
      {
        title: 'Ingeniería full stack de producto',
        text: 'Puedo moverme entre interfaces frontend, APIs backend, autenticación, modelado de datos relacionales y despliegue sin perder el contexto del producto.',
        proof: ['Aplicaciones React', 'APIs REST', 'Autenticación JWT', 'Flujos CRM y dashboards'],
      },
      {
        title: 'Automatización asistida por IA',
        text: 'Uso Python, APIs de OpenAI y herramientas de datos para convertir trabajo operativo manual en flujos repetibles, asistentes internos y sistemas de reportes.',
        proof: ['Chatbots contextuales', 'Generación de reportes', 'Consultas operativas asistidas', 'Extracción documental'],
      },
      {
        title: 'Sistemas de datos y procesos',
        text: 'Trabajo cerca del dato de negocio: optimización SQL, procesamiento de múltiples fuentes, validación fiscal, seguimiento de métricas y reporting estructurado.',
        proof: ['PostgreSQL', 'SQL Server', 'MySQL', 'Pandas', 'Automatización de Excel'],
      },
      {
        title: 'Infraestructura de producción',
        text: 'Despliego y opero aplicaciones en Linux, VPS y plataformas cloud considerando SSL, SSH, rendimiento, seguridad básica y entrega continua.',
        proof: ['Linux VPS', 'AWS EC2', 'Docker', 'Cloudflare', 'Vercel', 'GitHub Actions'],
      },
    ],
    experienceLabel: 'Experiencia',
    experienceTitle: 'Una trayectoria formada por sistemas reales, no demos aisladas.',
    experience: [
      {
        role: 'Ingeniero de Desarrollo',
        company: 'HEZA',
        years: '2025 - Actualidad',
        summary:
          'Construye y mantiene plataformas core, dashboards internos, herramientas CRM, flujos de reportes con IA, dashboards de validación fiscal y despliegues Unix/Linux en producción.',
      },
      {
        role: 'Desarrollador Full Stack',
        company: 'MaximizeAI',
        years: '2024 - 2025',
        summary:
          'Desarrolló flujos de automatización hotelera, chatbots, persistencia en MySQL, scraping a gran escala, pipelines de imagen y microservicios Flask/FastAPI.',
      },
      {
        role: 'Ingeniero NPI',
        company: 'Foxconn',
        years: '2022 - 2025',
        summary:
          'Creó dashboards analíticos, tracking de KPIs, optimizaciones SQL, pipelines con Pandas y reportes automatizados para equipos de ingeniería y operación.',
      },
      {
        role: 'Desarrollador Full Stack',
        company: 'Wisscrow',
        years: '2020 - 2022',
        summary:
          'Mantuvo y modernizó aplicaciones Laravel y desarrolló una aplicación local robusta orientada a cajeros automáticos en C#.',
      },
    ],
    stackLabel: 'Stack técnico',
    stackTitle: 'Herramientas que uso para entregar sistemas completos.',
    skillGroups: [
      {
        group: 'Backend',
        items: ['Python', 'Django', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'APIs REST'],
      },
      {
        group: 'Frontend',
        items: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Hooks', 'Axios', 'HTML', 'CSS'],
      },
      {
        group: 'Bases de datos',
        items: ['SQL', 'PostgreSQL', 'SQL Server', 'MySQL', 'Supabase', 'Optimización de queries'],
      },
      {
        group: 'Cloud y DevOps',
        items: [
          'AWS EC2',
          'Docker',
          'Linux VPS',
          'Ubuntu Server',
          'Windows Server',
          'Cloudflare',
          'Vercel',
          'GitHub Actions',
          'SSH',
          'Despliegues SSL',
        ],
      },
      {
        group: 'IA y automatización',
        items: ['APIs de OpenAI', 'TensorFlow', 'OpenCV', 'Selenium', 'BeautifulSoup', 'Pandas', 'NumPy', 'Integración de chatbots'],
      },
    ],
    educationLabel: 'Educación',
    education: 'Ingeniería en Computación, Universidad de Guadalajara, 2018 - 2023.',
    contactLabel: 'Contacto',
    contactTitle: 'Construyamos un sistema que se gane su lugar en producción.',
    email: 'gilbertoglez1999@hotmail.com',
    linkedin: 'linkedin.com/in/gilbertoglez',
    github: 'github.com/Gilbertmax',
  },
}
