import z from "zod";
import { name } from "./core";

export const editProfileSchema = z.object({
    name: name,
    ava: z.any().optional()
});

export type editProfileFormSchema = z.infer<typeof editProfileSchema>
