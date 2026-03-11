import z from "zod";

export const createPostSchema = z.object({
    department: z
        .string(),
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

export type createPostFormSchema = z.infer<typeof createPostSchema>