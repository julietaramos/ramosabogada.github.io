import './Hero.css'

function CircleEmblem() {
  return (
    <div className="hero__emblem">
      <svg
        className="hero__shield-svg"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer circle */}
        <circle cx="60" cy="60" r="56" stroke="rgba(200,168,130,0.45)" strokeWidth="1.5" />
        {/* Inner circle */}
        <circle cx="60" cy="60" r="50" stroke="rgba(200,168,130,0.2)" strokeWidth="0.8" />

        {/* Scales — pole */}
        <line x1="60" y1="18" x2="60" y2="72" stroke="rgba(200,168,130,0.75)" strokeWidth="1.5" />
        {/* Beam */}
        <line x1="32" y1="32" x2="88" y2="32" stroke="rgba(200,168,130,0.75)" strokeWidth="1.5" />
        {/* Left chains */}
        <line x1="32" y1="32" x2="26" y2="50" stroke="rgba(200,168,130,0.6)" strokeWidth="1" />
        <line x1="32" y1="32" x2="38" y2="50" stroke="rgba(200,168,130,0.6)" strokeWidth="1" />
        {/* Left pan */}
        <path d="M23 50 Q32 58 41 50" stroke="rgba(200,168,130,0.75)" strokeWidth="1.5" />
        {/* Right chains */}
        <line x1="88" y1="32" x2="82" y2="50" stroke="rgba(200,168,130,0.6)" strokeWidth="1" />
        <line x1="88" y1="32" x2="94" y2="50" stroke="rgba(200,168,130,0.6)" strokeWidth="1" />
        {/* Right pan */}
        <path d="M79 50 Q88 58 97 50" stroke="rgba(200,168,130,0.75)" strokeWidth="1.5" />
        {/* Base */}
        <line x1="50" y1="72" x2="70" y2="72" stroke="rgba(200,168,130,0.75)" strokeWidth="1.5" />

        {/* Divider */}
        <line x1="36" y1="79" x2="84" y2="79" stroke="rgba(200,168,130,0.3)" strokeWidth="0.8" />

        {/* SR */}
        <text
          x="60"
          y="102"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="20"
          fill="rgba(200,168,130,0.75)"
          fontWeight="bold"
          letterSpacing="6"
        >
          SR
        </text>
      </svg>

      <p className="hero__emblem-name">SABRINA RAMOS</p>
      <p className="hero__emblem-tagline">Abogada</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Presentación">
      {/* Decorative circles */}
      <div className="hero__decoration" aria-hidden="true">
        <div className="hero__circle hero__circle--outer" />
        <div className="hero__circle hero__circle--middle" />
        <CircleEmblem />
      </div>

      {/* Main content */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line">SABRINA</span>
          <span className="hero__title-line hero__title-line--sub">RAMOS</span>
        </h1>
        <div className="hero__divider" aria-hidden="true" />
        <p className="hero__subtitle">Asesoría Legal Integral</p>
        <a href="#contact" className="hero__cta">Consultar ahora</a>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="hero__scroll-indicator" aria-label="Ir a servicios">
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}
