import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Ramos, Rojo')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Servicios')).toBeInTheDocument()
    expect(screen.getByText('Sobre Nosotros')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Abrir menú de navegación')
    const menu = screen.getByRole('list')

    expect(menu.className).not.toContain('navbar__menu--open')
    fireEvent.click(toggle)
    expect(menu.className).toContain('navbar__menu--open')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Abrir menú de navegación')
    fireEvent.click(toggle)
    fireEvent.click(screen.getByText('Servicios'))
    const menu = screen.getByRole('list')
    expect(menu.className).not.toContain('navbar__menu--open')
  })
})
