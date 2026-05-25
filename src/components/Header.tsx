import { useEffect, useState } from 'react'
import type { Language, PortfolioContent, Theme } from '../types/portfolio'
import { ThemeToggle } from './ThemeToggle'

type HeaderProps = {
  content: PortfolioContent
  language: Language
  theme: Theme
  onLanguageChange: (language: Language) => void
  onThemeToggle: () => void
}

export function Header({ content, language, theme, onLanguageChange, onThemeToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuLabel = language === 'en' ? 'Menu' : 'Menú'

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.matchMedia('(min-width: 901px)').matches) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const changeLanguage = (nextLanguage: Language) => {
    onLanguageChange(nextLanguage)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" aria-label={content.aria.nav} data-menu-open={isMenuOpen}>
      <div className="header-frame">
        <a className="brand" href="#top" aria-label="Gilberto Gonzalez home">
          <span className="brand-portrait" aria-hidden="true">
            <span className="brand-image-frame">
              <img src="/yo.png" alt="" />
            </span>
            <span className="brand-initials">GG</span>
          </span>
          <span className="brand-copy">
            <strong>Gilberto Gonzalez</strong>
            <small>{language === 'en' ? 'Full stack systems' : 'Sistemas full stack'}</small>
          </span>
        </a>

        <nav className="primary-nav" id="primary-navigation" aria-label={content.aria.nav}>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>
            {content.nav[0]}
          </a>
          <a href="#capabilities" onClick={() => setIsMenuOpen(false)}>
            {content.nav[1]}
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            {content.nav[2]}
          </a>
          <a href="#stack" onClick={() => setIsMenuOpen(false)}>
            {content.nav[3]}
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            {content.nav[4]}
          </a>
          <div className="mobile-menu-tools" aria-label={content.aria.language}>
            <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>
              EN
            </button>
            <button type="button" aria-pressed={language === 'es'} onClick={() => changeLanguage('es')}>
              ES
            </button>
          </div>
        </nav>

        <div className="header-controls">
          <div className="language-switcher" aria-label={content.aria.language}>
            <button type="button" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>
              EN
            </button>
            <button type="button" aria-pressed={language === 'es'} onClick={() => changeLanguage('es')}>
              ES
            </button>
          </div>
          <ThemeToggle language={language} theme={theme} onToggle={onThemeToggle} />
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? (language === 'en' ? 'Close menu' : 'Cerrar menú') : menuLabel}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span>{menuLabel}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
      </div>
    </header>
  )
}
