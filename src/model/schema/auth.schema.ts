import z from "zod";
import { password } from "./core";

export const authSchema = z.object({
    nameOrEmail: z
        .string(),
    password: password
});

export type authFormSchema = z.infer<typeof authSchema>
