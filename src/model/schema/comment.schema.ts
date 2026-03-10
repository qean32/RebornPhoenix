import z from "zod";

export const commentSchema = z.object({
    payload_content: z
        .string()
        .max(255, { message: 'Максимальная длина - 255 символа' }),
    files: z
        .any()
});

export type commentFormSchema = z.infer<typeof commentSchema>