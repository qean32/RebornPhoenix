import z from "zod";

export const password = z
    .string()
    .regex(
        /^[A-Za-z0-9]+$/,
        'Пароль должен состоять из латиница и цифр'
    )
    .max(20, { message: 'Максимальная длина - 20' })
    .min(8, { message: 'Минимальная длина - 8' })

export const name = z
    .string()
    .regex(
        /^[A-Za-z0-9]+$/,
        'Никнейм должен состоять из латиница и цифр'
    )
    .max(16, { message: 'Максимальная длина - 16' })
    .min(3, { message: 'Минимальная длина - 3' })

export const email = z
    .string()
    .email({ message: 'Не валидная почта' })

export const confirmPassword = ({ confirmPassword, password }: { confirmPassword: string, password: string }, ctx: any) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmPassword']
        });
    }
}