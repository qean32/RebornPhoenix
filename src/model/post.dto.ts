import { idDto } from "./id.dto"

export type postDto = idDto & {
    title: string,
    content: string,
    tags: string
    user: {
        name: string
        id: number
        ava: string
    },
    files: string
    department: string
    likes: number
    fixed?: boolean
}