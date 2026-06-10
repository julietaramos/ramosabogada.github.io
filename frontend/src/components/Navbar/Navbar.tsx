import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Servicios', href: '#services', sectionId: 'services' },
  { label: 'Sobre Mí', href: '#about', sectionId: 'about' },
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
          <svg viewBox="0 0 56 56" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="28" cy="28" r="26" stroke="rgba(200,168,130,0.9)" strokeWidth="1.5"/>
            <line x1="28" y1="10" x2="28" y2="37" stroke="rgba(200,168,130,0.9)" strokeWidth="1"/>
            <line x1="14" y1="18" x2="42" y2="18" stroke="rgba(200,168,130,0.9)" strokeWidth="1.2"/>
            <line x1="14" y1="18" x2="11" y2="26" stroke="rgba(200,168,130,0.8)" strokeWidth="0.9"/>
            <line x1="14" y1="18" x2="17" y2="26" stroke="rgba(200,168,130,0.8)" strokeWidth="0.9"/>
            <path d="M9.5 26 Q14 30.5 18.5 26" stroke="rgba(200,168,130,0.9)" strokeWidth="1.2"/>
            <line x1="42" y1="18" x2="39" y2="26" stroke="rgba(200,168,130,0.8)" strokeWidth="0.9"/>
            <line x1="42" y1="18" x2="45" y2="26" stroke="rgba(200,168,130,0.8)" strokeWidth="0.9"/>
            <path d="M37.5 26 Q42 30.5 46.5 26" stroke="rgba(200,168,130,0.9)" strokeWidth="1.2"/>
            <line x1="23" y1="37" x2="33" y2="37" stroke="rgba(200,168,130,0.9)" strokeWidth="1.2"/>
            <line x1="16" y1="40" x2="40" y2="40" stroke="rgba(200,168,130,0.4)" strokeWidth="0.5"/>
            <text x="28" y="51" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="rgba(200,168,130,0.9)" fontWeight="bold" letterSpacing="3">SR</text>
          </svg>
          <span className="navbar__brand-main">Sabrina Ramos</span>
          <span className="navbar__brand-sub">Abogada</span>
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
