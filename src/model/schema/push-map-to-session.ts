import z from "zod";

export const pushMapToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 8' })
    ,
    path: z.any(),
});

export type pushMapToSessionFormDto = {
    name: string
    path: any
}