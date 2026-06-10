import type { ContactFormData, ContactResponse } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export const sendContactEmail = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) throw new Error('Error al enviar el mensaje')
  const result = await response.json()
  return { success: true, message: result.message }
}
