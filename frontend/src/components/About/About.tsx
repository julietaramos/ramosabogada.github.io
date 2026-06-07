import type React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './About.css'

export default function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="about" className="about" aria-label="Sobre Nosotras">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`about__content ${isVisible ? 'about__content--visible' : ''}`}
      >
        <div className="about__text">
          <h2 className="about__heading">¿Quiénes somos?</h2>
          <p className="about__paragraph">
            Más que abogadas, somos aliadas en tus búsquedas de justicia y tranquilidad. Buscamos
            ayudarte a encontrar soluciones legales efectivas. Nuestra formación en la Universidad
            de Buenos Aires y nuestra pasión por la justicia nos han llevado a especializarnos en
            derecho penal, familia, civil y violencia de género.
          </p>
          <p className="about__paragraph">
            Cada caso es único y lo transitamos con la confidencialidad, respeto y dedicación que
            merece. Nuestro objetivo es que nuestros clientes se sientan respaldados en todo
            momento, brindando soluciones claras y efectivas.
          </p>
        </div>
        <div className="about__image-wrapper">
          <img
            src="/images/quienesSomos.png"
            alt="Dra. Sabrina Ramos y Dra. Oriana Rojo"
            className="about__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
