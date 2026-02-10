import { idType } from "./id.type"
import { userInterface } from "./user.interface"

export type postType = idType & {
    title: string,
    description: string,
    content: string,
    tags: string
    user: userInterface,
    files: string
    department: string
    likes: number
    fixed?: boolean
}