import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Servicios', href: '#services', sectionId: 'services' },
  { label: 'Sobre Nosotros', href: '#about', sectionId: 'about' },
  { label: 'Contacto', href: '#contact', sectionId: 'contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.sectionId)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollY = window.scrollY + 100
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTION_IDS[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-main">Ramos, Rojo</span>
          <span className="navbar__brand-sub">y Asociados</span>
        </a>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navbar-menu" className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          {NAV_LINKS.map(({ label, href, sectionId }) => (
            <li key={href} className="navbar__item">
              <a
                href={href}
                className={`navbar__link ${activeSection === sectionId ? 'navbar__link--active' : ''}`}
                aria-current={activeSection === sectionId ? 'true' : undefined}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
