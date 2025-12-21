import z from "zod";

export const createPostSchema = z.object({
    department: z
        .number(),
    text: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    content: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    tags: z
        .string(),
    title: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    files: z
        .any()
});

export type createPostFormDto = {
    department: number
    text: string
    content: string
    tags: string
    files: any
    title: string
}