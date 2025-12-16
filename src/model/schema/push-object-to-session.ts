import z from "zod";

export const pushObjectToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    path: z.any(),
    // description: z.string().max(255, { message: 'Мексимальная длина 255 символа' }),
});

export type pushObjectToSessionFormDto = {
    name: string
    path: any
}