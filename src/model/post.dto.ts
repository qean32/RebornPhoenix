import { idDto } from "./id.dto"
import { userDto } from "./user.dto"

export type postDto = idDto & {
    title: string,
    description: string,
    content: string,
    tags: string
    user: userDto,
    files: string
    department: string
    likes: number
    fixed?: boolean
}