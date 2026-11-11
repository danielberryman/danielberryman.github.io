import { useTheme } from '../hooks/useTheme'
import './Header.css'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="wrap masthead">
        <a href="/" className="brand">
          <img className="avatar" src="/avatar.jpg" alt="" />
          <span className="name">Daniel Berryman</span>
        </a>

        <nav>
          <a href="#open-to">Open to</a>
          <a href="#tests">Tests</a>
          <a href="#kit">Kit</a>
          <a href="#work">Work</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
