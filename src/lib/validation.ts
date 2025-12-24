import { z } from 'zod'

export class AuthValidation {
    static loginSchema = z.object({
        email: z.string().email('Geçerli bir email girin'),
        password: z.string().min(3, 'Şifre en az 3 karakter olmalı'),
    })
}

export type LoginFormInputs = z.infer<typeof AuthValidation.loginSchema>
