import z from "zod";

export const banSchema = z.object({
    id: z
        .string(),
    reason: z
        .string(),
    date: z
        .string()
});

export type banFormSchema = {
    id: string
    reason: string
    date: string
}