import z from "zod";
import {
    confirmPassword,
    email, name, password
} from "./zod-types";

export const registrationSchema = z.object({
    password: password,
    confirmPassword: password,
    name: name,
    email: email,
})
    .superRefine(confirmPassword);

export type registrationFormDto = {
    password: string
    confirmPassword: string
    name: string
    email: string
}