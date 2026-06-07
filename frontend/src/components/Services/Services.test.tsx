import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Services from './Services'

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })))
})

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText('Servicios')).toBeInTheDocument()
  })

  it('renders service categories', () => {
    render(<Services />)
    expect(screen.getByText('Derecho Laboral')).toBeInTheDocument()
    expect(screen.getByText('Accidentes de Tránsito')).toBeInTheDocument()
    expect(screen.getByText('Derecho Penal')).toBeInTheDocument()
  })

  it('renders service items', () => {
    render(<Services />)
    expect(screen.getByText('Derecho de Familia')).toBeInTheDocument()
    expect(screen.getByText('Mala Praxis')).toBeInTheDocument()
    expect(screen.getByText('Derecho del Consumidor')).toBeInTheDocument()
  })
})
