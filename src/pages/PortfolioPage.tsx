import { useEffect, useMemo, useState } from 'react'
import { CapabilitiesSection } from '../components/CapabilitiesSection'
import { ContactModal } from '../components/ContactModal'
import { ContactSection } from '../components/ContactSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProfileHighlights } from '../components/ProfileHighlights'
import { ProjectCarousel } from '../components/ProjectCarousel'
import { StackSection } from '../components/StackSection'
import { content, cvLinks, whatsappNumber } from '../data/portfolioContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Language, Project, Theme } from '../types/portfolio'

export function PortfolioPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('dark')
  const [projectPage, setProjectPage] = useState(0)
  const [capabilityIndex, setCapabilityIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [projectPageSize, setProjectPageSize] = useState(2)

  const pageContent = content[language]
  const cvLink = cvLinks[language]
  const projectPages = useMemo<Project[][]>(() => {
    return Array.from({ length: Math.ceil(pageContent.projects.length / projectPageSize) }, (_, pageIndex) =>
      pageContent.projects.slice(pageIndex * projectPageSize, pageIndex * projectPageSize + projectPageSize),
    )
  }, [pageContent.projects, projectPageSize])
  const projectPageCount = projectPages.length
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pageContent.modal.whatsappMessage)}`

  useScrollReveal(language)

  useEffect(() => {
    if (window.location.hash) {
      return
    }

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    const frameId = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }))

    return () => {
      window.cancelAnimationFrame(frameId)
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)')

    const updateProjectPageSize = () => {
      setProjectPageSize(mediaQuery.matches ? 1 : 2)
      setProjectPage(0)
    }

    updateProjectPageSize()
    mediaQuery.addEventListener('change', updateProjectPageSize)

    return () => mediaQuery.removeEventListener('change', updateProjectPageSize)
  }, [])

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setProjectPage(0)
    setCapabilityIndex(0)
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title =
      language === 'en'
        ? 'Gilberto Gonzalez | Full Stack & AI Systems Engineer'
        : 'Gilberto Gonzalez | Ingeniero Full Stack & Sistemas IA'
  }, [language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (isCarouselPaused || projectPageCount <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setProjectPage((page) => (page + 1) % projectPageCount)
    }, 5200)

    return () => window.clearInterval(intervalId)
  }, [isCarouselPaused, projectPageCount])

  useEffect(() => {
    if (!isContactOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isContactOpen])

  return (
    <>
      <a className="skip-link" href="#main">
        {pageContent.skip}
      </a>

      <Header
        content={pageContent}
        language={language}
        theme={theme}
        onLanguageChange={changeLanguage}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />

      <main id="main">
        <Hero content={pageContent} cvLink={cvLink} language={language} onContactOpen={() => setIsContactOpen(true)} />
        <ProfileHighlights content={pageContent} language={language} />
        <ProjectCarousel
          content={pageContent}
          language={language}
          projectPage={projectPage}
          projectPageCount={projectPageCount}
          projectPages={projectPages}
          onPageChange={setProjectPage}
          onPauseChange={setIsCarouselPaused}
        />
        <CapabilitiesSection
          content={pageContent}
          language={language}
          capabilityIndex={capabilityIndex}
          onCapabilityChange={setCapabilityIndex}
        />
        <ExperienceSection content={pageContent} />
        <StackSection content={pageContent} />
        <ContactSection content={pageContent} cvLink={cvLink} onContactOpen={() => setIsContactOpen(true)} />
      </main>

      {isContactOpen && (
        <ContactModal content={pageContent} whatsappHref={whatsappHref} onClose={() => setIsContactOpen(false)} />
      )}
    </>
  )
}
