import './Hero.css'

function ShieldEmblem() {
  return (
    <div className="hero__emblem">
      <svg
        className="hero__shield-svg"
        viewBox="0 0 120 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer shield */}
        <path
          d="M 6 6 H 114 V 74 Q 114 116 60 140 Q 6 116 6 74 Z"
          stroke="rgba(200,168,130,0.45)"
          strokeWidth="1.5"
          fill="rgba(200,168,130,0.03)"
        />
        {/* Inner shield border */}
        <path
          d="M 14 13 H 106 V 72 Q 106 110 60 132 Q 14 110 14 72 Z"
          stroke="rgba(200,168,130,0.25)"
          strokeWidth="1"
          fill="none"
        />
        {/* Top ornamental line */}
        <line x1="22" y1="30" x2="98" y2="30" stroke="rgba(200,168,130,0.2)" strokeWidth="0.5" />
        {/* Bottom ornamental line */}
        <line x1="28" y1="97" x2="92" y2="97" stroke="rgba(200,168,130,0.2)" strokeWidth="0.5" />

        {/* Normal R (left) */}
        <text
          x="16"
          y="90"
          fontFamily="Georgia, serif"
          fontSize="64"
          fontWeight="bold"
          fill="rgba(200,168,130,0.75)"
          letterSpacing="-2"
        >
          R
        </text>

        {/* Mirrored R (right) — reflected around x=60 */}
        <g transform="translate(120,0) scale(-1,1)">
          <text
            x="16"
            y="90"
            fontFamily="Georgia, serif"
            fontSize="64"
            fontWeight="bold"
            fill="rgba(200,168,130,0.75)"
            letterSpacing="-2"
          >
            R
          </text>
        </g>
      </svg>

      <p className="hero__emblem-name">RAMOS, ROJO Y ASOCIADOS</p>
      <p className="hero__emblem-tagline">Estudio Jurídico</p>
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
        <ShieldEmblem />
      </div>

      {/* Main content */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line">RAMOS, ROJO</span>
          <span className="hero__title-line hero__title-line--sub">Y ASOCIADOS</span>
        </h1>
        <div className="hero__divider" aria-hidden="true" />
        <p className="hero__subtitle">Asesoría legal integral y confidencial</p>
        <a href="#contact" className="hero__cta">Consultar ahora</a>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="hero__scroll-indicator" aria-label="Ir a servicios">
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}
