import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders name and title', () => {
    render(<Hero />)
    expect(screen.getByText('RAMOS, ROJO')).toBeInTheDocument()
    expect(screen.getByText('Y ASOCIADOS')).toBeInTheDocument()
  })

  it('renders CTA link pointing to contact', () => {
    render(<Hero />)
    const cta = screen.getByText('Consultar ahora')
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('has section landmark with correct id', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })
})
