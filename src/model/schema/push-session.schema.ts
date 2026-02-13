import z from "zod";

export const pushSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(8, { message: 'Минимальная длина - 8' }),

    path: z.string()
});

export type pushSessionFormSchema = {
    name: string
    path: string
}