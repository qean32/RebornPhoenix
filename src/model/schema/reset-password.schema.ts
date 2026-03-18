import z from "zod";
import { email } from "./core";

export const resetPasswordSchema = z.object({
    email: email
});

export type resetPasswordFormSchema =  z.infer<typeof resetPasswordSchema>
