import axios from 'axios'
import type { ContactFormData, ContactResponse } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export const sendContactEmail = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await axios.post<ContactResponse>(`${API_BASE_URL}/api/contact`, data)
  return response.data
}
