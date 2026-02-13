import z from "zod";
import { confirmPassword, password } from "./zod-types";

export const changePasswordSchema = z.object({
    password: password,
    confirmPassword: password
})
    .superRefine(confirmPassword);

export type changePasswordFormSchema = {
    password: string
    confirmPassword: string
}