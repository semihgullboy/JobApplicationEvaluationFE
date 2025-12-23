import { create } from 'zustand'

interface User {
    email: string
    id?: string
    name?: string
}

interface AuthState {
    user: User | null
    token: string | null
    login: (user: User, token: string) => void
    logout: () => void
    setToken: (token: string) => void
    getToken: () => string | null
}

export const useAuth = create<AuthState>((set, get) => ({
    user: null,
    token: localStorage.getItem('authToken'),
    login: (user, token) => {
        localStorage.setItem('authToken', token)
        set({ user, token })
    },
    logout: () => {
        localStorage.removeItem('authToken')
        set({ user: null, token: null })
    },
    setToken: (token) => {
        localStorage.setItem('authToken', token)
        set({ token })
    },
    getToken: () => get().token,
}))
