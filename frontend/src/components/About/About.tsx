import type React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './About.css'

export default function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="about" className="about" aria-label="Sobre Mí">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`about__content ${isVisible ? 'about__content--visible' : ''}`}
      >
        <div className="about__text">
          <h2 className="about__heading">¿Quién soy?</h2>
          <p className="about__paragraph">
            Soy una abogada comprometida con brindar asesoramiento jurídico integral, claro y responsable.
          </p>
          <p className="about__paragraph">
            Mi formación en la Universidad de Buenos Aires y mi experiencia profesional me permiten
            acompañar a mis clientes en distintas áreas del derecho, especialmente en materia penal,
            familia, civil, comercial y situaciones vinculadas a violencia de género.
          </p>
          <p className="about__paragraph">
            Entiendo que cada caso requiere una mirada particular. Por eso, trabajo con
            confidencialidad, respeto y dedicación, procurando ofrecer soluciones legales eficaces
            y un acompañamiento cercano durante todo el proceso.
          </p>
          <p className="about__paragraph">
            Mi objetivo es que cada persona que confía en mí se sienta escuchada, orientada y
            respaldada en la defensa de sus derechos.
          </p>
        </div>
        <div className="about__image-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}images/quienSoy.png`}
            alt="Sabrina Ramos Abogada"
            className="about__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
