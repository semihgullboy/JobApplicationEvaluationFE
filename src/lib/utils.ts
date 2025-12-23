import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function decodeTokenName(token: string): string | undefined {
  try {
    const payload = token.split('.')[1]
    const decoded = JSON.parse(atob(payload))
    return decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || decoded.name
  } catch (error) {
    console.error('Token decode error:', error)
    return undefined
  }
}