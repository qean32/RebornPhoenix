import { postType } from "./post.type"

export type departmentType = {
    id: number
    name: string
    description: string
    img: string
    count: number
    fixed: postType
}