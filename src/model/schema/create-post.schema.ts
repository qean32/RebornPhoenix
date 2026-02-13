import z from "zod";

export const createPostSchema = z.object({
    department: z
        .number(),
    description: z
        .string()
        .min(10, { message: 'Минимальная длинна 10' }),
    payload_content: z
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

export type createPostFormSchema = {
    department: number
    description: string
    payload_content: string
    tags: string
    files: any
    title: string
}