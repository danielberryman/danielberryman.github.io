import { useTheme } from '../hooks/useTheme'
import './Header.css'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <div className="wrap masthead">
        <a href="/" className="brand">
          <img className="avatar" src="/avatar.jpg" alt="" />
          <span className="name eyebrow">Daniel Berryman</span>
        </a>

        <nav>
          <a className="eyebrow" href="#tests">
            Tests
          </a>
          <a className="eyebrow" href="#kit">
            Kit
          </a>
          <a className="eyebrow" href="#work">
            Work
          </a>
          <a className="eyebrow" href="#contact">
            Contact
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
