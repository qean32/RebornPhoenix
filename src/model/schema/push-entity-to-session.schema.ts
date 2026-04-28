import z from "zod";
import { initiative } from "./core";

export const pushEntityToSessionSchema = z.object({
    name: z
        .string()
        .max(20, { message: 'Максимальная длина - 20' })
        .min(4, { message: 'Минимальная длина - 4' }),
    img: z
        .file(),
    originalImg: z.file(),
    description: z.string().max(255, { message: 'Максимальная длина 255 символа' }),
    initiative: initiative
});

export type pushEntityToSessionFormSchema = z.infer<typeof pushEntityToSessionSchema>
