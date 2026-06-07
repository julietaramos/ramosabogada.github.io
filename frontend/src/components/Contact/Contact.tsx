import { useState } from 'react'
import type React from 'react'
import type { ContactFormData, FormStatus } from '../../types'
import { sendContactEmail } from '../../api/contactApi'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './Contact.css'

const EMPTY_FORM: ContactFormData = { name: '', email: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactEmail(formData)
      setStatus('success')
      setFormData(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact" aria-label="Contacto">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`contact__card ${isVisible ? 'contact__card--visible' : ''}`}
      >
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__subtitle">
          Lo invitamos a contactarnos para una evaluación confidencial de su caso.
        </p>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Formulario de contacto"
        >
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__input"
              placeholder="Ingrese su nombre"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="name"
              disabled={status === 'loading'}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              placeholder="Ingrese su correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="email"
              disabled={status === 'loading'}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="contact__input contact__textarea"
              placeholder="Describa brevemente su consulta"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              disabled={status === 'loading'}
            />
          </div>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--success" role="status">
              ¡Mensaje enviado! Nos pondremos en contacto a la brevedad.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error" role="alert">
              Ocurrió un error al enviar. Por favor intente nuevamente.
            </p>
          )}

          <button
            type="submit"
            className="contact__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
          </button>
        </form>
      </div>
    </section>
  )
}
