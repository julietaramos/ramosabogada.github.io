export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export interface ServiceCategory {
  title: string
  subtitle?: string
  description?: string
  items: string[]
  closing?: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
