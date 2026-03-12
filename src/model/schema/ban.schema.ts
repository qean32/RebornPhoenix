import z from "zod";

export const banSchema = z.object({
    id: z
        .string(),
    reason: z
        .string(),
    date: z
        .string()
});

export type banFormSchema = z.infer<typeof banSchema>