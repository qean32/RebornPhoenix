import z from "zod";

export const pushEntityToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    path: z
        .any()
    ,
    description: z.string().max(255, { message: 'Максимальная длина 255 символа' }),
    initiative: z.string()
});

export type pushEntityToSessionFormDto = {
    name: string
    path: any
    description: string
    initiative: string
}