import z from "zod";
import { initiative } from "./zod-types";

export const pushEntityToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 4' })
    ,
    img: z
        .file()
    ,
    description: z.string().max(255, { message: 'Максимальная длина 255 символа' }),
    initiative: initiative
});

export type pushEntityToSessionFormSchema = {
    name: string
    img: any
    description: string
    initiative: string
}