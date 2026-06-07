import type { ContactFormData, ContactResponse } from '../types'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'e033ff85-59dc-4dd0-96a5-3ce7313c65b6'

export const sendContactEmail = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Nueva consulta de ${data.name} — Ramos, Rojo y Asociados`,
      from_name: data.name,
      email: data.email,
      message: data.message,
    }),
  })

  const result = await response.json()
  if (!result.success) throw new Error(result.message ?? 'Error al enviar')
  return { success: true, message: result.message }
}
