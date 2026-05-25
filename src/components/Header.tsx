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
      <a className="brand" href="#top" aria-label="Gilberto Gonzalez home">
        GG
      </a>
      <div className="header-actions">
        <nav>
          <a href="#work">{content.nav[0]}</a>
          <a href="#capabilities">{content.nav[1]}</a>
          <a href="#experience">{content.nav[2]}</a>
          <a href="#stack">{content.nav[3]}</a>
          <a href="#contact">{content.nav[4]}</a>
        </nav>
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
    </header>
  )
}
