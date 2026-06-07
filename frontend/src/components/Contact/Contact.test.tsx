import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Contact from './Contact'
import * as contactApi from '../../api/contactApi'

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })))
})

describe('Contact', () => {
  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Enviar consulta' })).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    vi.spyOn(contactApi, 'sendContactEmail').mockResolvedValueOnce({ success: true, message: 'ok' })
    render(<Contact />)

    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Juan', name: 'name' } })
    fireEvent.change(screen.getByLabelText('Correo Electrónico'), { target: { value: 'juan@mail.com', name: 'email' } })
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola', name: 'message' } })
    fireEvent.click(screen.getByRole('button', { name: 'Enviar consulta' }))

    await waitFor(() => {
      expect(screen.getByText(/Mensaje enviado/i)).toBeInTheDocument()
    })
  })

  it('shows error message when submission fails', async () => {
    vi.spyOn(contactApi, 'sendContactEmail').mockRejectedValueOnce(new Error('Network error'))
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: 'Enviar consulta' }))

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
})
