import { useTheme } from '../hooks/useTheme'
import './Header.css'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <div className="wrap masthead">
        <a href="/" className="name eyebrow">
          Daniel Berryman
        </a>

        <nav>
          <a className="eyebrow" href="#writing">
            Writing
          </a>
          <a className="eyebrow" href="#notes">
            Notes
          </a>
          <a className="eyebrow" href="#about">
            About
          </a>
          <button
            type="button"
            className="eyebrow theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
