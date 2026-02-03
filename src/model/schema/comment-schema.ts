import z from "zod";

export const commentSchema = z.object({
    payload_content: z
        .string()
        .max(255, { message: 'Максимальная длина - 255 символа' }),
    files: z
        .any()
});

export type commentFormDto = {
    payload_content: string
    files: any
}