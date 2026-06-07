import type React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { ServiceCategory } from '../../types'
import './Services.css'

const INTRO = 'Brindamos asesoramiento jurídico personalizado, con un enfoque profesional y confidencial orientado a soluciones eficientes.'

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Derecho Laboral',
    subtitle: 'Accidentes y Enfermedades Profesionales',
    description: 'Representación integral de trabajadores ante contingencias laborales.',
    items: [
      'Denuncias ante ART',
      'Seguimiento de tratamientos médicos',
      'Impugnación de altas médicas',
      'Reclamos indemnizatorios',
    ],
    closing: 'Intervenimos en cada etapa del proceso, asegurando la correcta defensa de sus derechos.',
  },
  {
    title: 'Accidentes de Tránsito',
    description: 'Asesoramiento y representación en reclamos derivados de siniestros viales.',
    items: [
      'Daños personales',
      'Daños materiales',
      'Negociaciones con compañías aseguradoras',
      'Gestión integral del reclamo',
    ],
    closing: 'Nuestro objetivo es lograr una reparación plena y justa en el menor tiempo posible.',
  },
  {
    title: 'Derecho Penal',
    description: 'Defensa y asistencia legal en todas las etapas del proceso penal.',
    items: [
      'Asistencia en comisarías y fiscalías',
      'Defensa en investigaciones penales',
      'Excarcelaciones',
      'Denuncias y querellas',
    ],
    closing: 'Actuamos con celeridad, confidencialidad y estrategia. Disponibilidad para atención de urgencias.',
  },
  {
    title: 'Mala Praxis',
    description: 'Asesoramiento y representación en casos de responsabilidad profesional médica.',
    items: [
      'Evaluación de negligencia profesional',
      'Daños derivados de prácticas médicas',
      'Reclamos indemnizatorios',
      'Intervención judicial y extrajudicial',
    ],
    closing: 'Analizamos cada caso con rigurosidad técnica, orientados a obtener una reparación integral del daño.',
  },
  {
    title: 'Ejecuciones',
    description: 'Gestión y seguimiento de procesos ejecutivos para el recupero de créditos.',
    items: [
      'Ejecuciones de pagarés y cheques',
      'Cobro de deudas',
      'Medidas cautelares',
      'Seguimiento integral del proceso',
    ],
    closing: 'Actuamos con rapidez y precisión para garantizar la efectividad en el recupero de activos.',
  },
  {
    title: 'Derecho de Familia',
    description: 'Acompañamiento legal en situaciones personales que requieren claridad y eficacia.',
    items: [
      'Divorcios',
      'Alimentos',
      'Cuidado personal y régimen de comunicación',
      'Acuerdos extrajudiciales',
    ],
    closing: 'Priorizamos soluciones consensuadas que resguarden los intereses de nuestros clientes.',
  },
  {
    title: 'Contratos y Responsabilidad Civil',
    items: [
      'Redacción y revisión de contratos',
      'Incumplimientos contractuales',
      'Redacción de cartas documento',
      'Reclamos por daños y perjuicios',
    ],
  },
  {
    title: 'Asesoramiento a PyMES y Emprendedores',
    items: [
      'Registro de marcas ante el INPI',
      'Contratos comerciales',
      'Constitución de sociedades',
      'Trámites ante IGJ',
    ],
  },
  {
    title: 'Derecho del Consumidor',
    items: [
      'Reclamos ante incumplimientos',
      'Garantías y devoluciones',
      'Conflictos en compras online',
    ],
  },
  {
    title: 'Asesoramiento Legal Integral',
    description: 'Consultoría jurídica orientada a la prevención de conflictos y toma de decisiones estratégicas.',
    items: [
      'Análisis de casos',
      'Estrategia legal',
      'Consultas personalizadas',
    ],
    closing: 'Brindamos claridad y seguridad jurídica en cada paso.',
  },
]

function ServiceCard({ title, subtitle, description, items, closing }: ServiceCategory) {
  return (
    <article className="service-card">
      <div className="service-card__header">
        <h3 className="service-card__title">{title}</h3>
        {subtitle && <p className="service-card__subtitle">{subtitle}</p>}
      </div>
      {description && <p className="service-card__description">{description}</p>}
      <ul className="service-card__list">
        {items.map((item) => (
          <li key={item} className="service-card__item">{item}</li>
        ))}
      </ul>
      {closing && <p className="service-card__closing">{closing}</p>}
    </article>
  )
}

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="services" className="services" aria-label="Servicios">
      <div className="services__inner">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`services__header ${isVisible ? 'services__header--visible' : ''}`}
        >
          <h2 className="services__title">Servicios</h2>
          <p className="services__intro">{INTRO}</p>
          <div className="services__divider" aria-hidden="true" />
        </div>

        <div className={`services__grid ${isVisible ? 'services__grid--visible' : ''}`}>
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
