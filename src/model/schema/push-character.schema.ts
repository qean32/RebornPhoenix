import z from "zod";
import { initiative } from "./zod-types";

export const pushCharacterSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 4' }),
    img: z
        .file()
    ,
    initiative: initiative
});

export type pushCharacterFormSchema = {
    name: string
    initiative: number
    img: any
}