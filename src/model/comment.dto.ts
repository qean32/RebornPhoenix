import { fileDto } from "./file.dto"
import { idDto } from "./id.dto"
import { userDto } from "./user.dto"


export type commentDto = idDto & {
    user: userDto
    content: string
    files: fileDto[]
    date: string
    created_at?: string
}