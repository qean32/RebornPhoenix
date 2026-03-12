import { fileType } from "./file.type"
import { idType } from "./id.type"
import { userInterface } from "./user.interface"


export type commentType = idType & {
    user: userInterface
    content: string
    files: fileType[]
    date: string
    created_at?: string
}