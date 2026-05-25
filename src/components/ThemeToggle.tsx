import type { Language, Theme } from '../types/portfolio'

type ThemeToggleProps = {
  language: Language
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ language, theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={theme === 'dark'}
      aria-label={language === 'en' ? 'Toggle dark mode' : 'Cambiar modo claro u oscuro'}
      data-theme-state={theme}
      onClick={onToggle}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb">
          {theme === 'dark' ? (
            <svg className="moon-icon" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="17" />
              <path d="M25.8 7.8a13.6 13.6 0 1 0 6.4 21.7A15.4 15.4 0 1 1 25.8 7.8Z" />
              <path d="m12.2 11.5 1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4 1.2-2.5Z" />
              <path d="m29.8 20.5.8 1.7 1.9.3-1.4 1.3.3 1.9-1.6-.9-1.7.9.3-1.9-1.4-1.3 1.9-.3.9-1.7Z" />
            </svg>
          ) : (
            <svg className="sun-cloud-icon" viewBox="0 0 40 40">
              <circle cx="26.5" cy="13.5" r="7.5" />
              <path d="M26.5 2.8v3.1M26.5 21.1v3.1M15.8 13.5h3.1M34.1 13.5h3.1M19 6l2.2 2.2M31.8 18.8 34 21M34 6l-2.2 2.2" />
              <path d="M10.6 28.8h18.1a6.1 6.1 0 0 0 .5-12.2 8.3 8.3 0 0 0-15.7 2.2 5.4 5.4 0 0 0-2.9 10Z" />
            </svg>
          )}
        </span>
      </span>
    </button>
  )
}
