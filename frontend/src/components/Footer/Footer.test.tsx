import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Ramos, Rojo y Asociados')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', { name: /sabrina\.abogada\.ramos/i })
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /WhatsApp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
  })

  it('all external links have target blank and rel noopener', () => {
    render(<Footer />)
    const externalLinks = [/Instagram/i, /WhatsApp/i, /LinkedIn/i].map(
      name => screen.getByRole('link', { name })
    )
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
