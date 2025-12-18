import z from "zod";
import { email } from "./zod-types";

export const resetPasswordSchema = z.object({
    email: email
});

export type resetPasswordFormDto = {
    email: string
}