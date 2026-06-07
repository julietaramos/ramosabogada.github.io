import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import About from './About'

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })))
})

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText('¿Quiénes somos?')).toBeInTheDocument()
  })

  it('renders about text mentioning UBA', () => {
    render(<About />)
    expect(screen.getByText(/Universidad de Buenos Aires/i)).toBeInTheDocument()
  })

  it('renders profile image with alt text', () => {
    render(<About />)
    const img = screen.getByAltText('Dra. Sabrina Ramos y Dra. Oriana Rojo')
    expect(img).toBeInTheDocument()
  })
})
