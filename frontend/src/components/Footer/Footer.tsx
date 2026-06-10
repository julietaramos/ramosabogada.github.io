import './Footer.css'

const CONTACT_INFO = {
  email: 'sramoslegal95@gmail.com',
  phone: '+54 11-5177-3577',
  whatsapp: 'https://wa.me/5491151773577',
  instagram: 'https://www.instagram.com/sabrinaramos_abogada/',
  linkedin: 'https://www.linkedin.com/in/sabrina-ramos-999676172/',
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__name">Sabrina Ramos</span>
          <span className="footer__role">Abogada</span>
        </div>

        <div className="footer__contact">
          <p className="footer__section-label">Contacto</p>
          <a href={`mailto:${CONTACT_INFO.email}`} className="footer__link">
            {CONTACT_INFO.email}
          </a>
          <a href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`} className="footer__link">
            {CONTACT_INFO.phone}
          </a>
        </div>

        <nav className="footer__social" aria-label="Redes sociales">
          <p className="footer__section-label">Redes</p>
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram (abre en nueva pestaña)">
            Instagram
          </a>
          <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp (abre en nueva pestaña)">
            WhatsApp
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn (abre en nueva pestaña)">
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Sabrina Ramos — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
