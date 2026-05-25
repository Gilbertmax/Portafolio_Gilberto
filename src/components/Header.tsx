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
  return (
    <header className="site-header" aria-label={content.aria.nav}>
      <div className="header-frame">
        <a className="brand" href="#top" aria-label="Gilberto Gonzalez home">
          <span className="brand-mark" aria-hidden="true">
            GG
          </span>
          <span className="brand-copy">
            <strong>Gilberto Gonzalez</strong>
            <small>{language === 'en' ? 'Full stack systems' : 'Sistemas full stack'}</small>
          </span>
        </a>

        <nav className="primary-nav" aria-label={content.aria.nav}>
          <a href="#work">{content.nav[0]}</a>
          <a href="#capabilities">{content.nav[1]}</a>
          <a href="#experience">{content.nav[2]}</a>
          <a href="#stack">{content.nav[3]}</a>
          <a href="#contact">{content.nav[4]}</a>
        </nav>

        <div className="header-controls">
          <div className="language-switcher" aria-label={content.aria.language}>
            <button type="button" aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>
              EN
            </button>
            <button type="button" aria-pressed={language === 'es'} onClick={() => onLanguageChange('es')}>
              ES
            </button>
          </div>
          <ThemeToggle language={language} theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  )
}
