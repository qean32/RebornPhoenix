import z from "zod";
import { name } from "./zod-types";

export const editProfileSchema = z.object({
    name: name,
    ava: z.any().nullable()
});

export type editProfileFormSchema = {
    name: string
    ava?: any
}