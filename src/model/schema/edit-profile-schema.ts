import z from "zod";
import { name } from "./zod-types";

export const editProfileSchema = z.object({
    name: name
});

export type editProfileFormDto = {
    name: string
}