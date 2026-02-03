import { postDto } from "./post.dto"

export type departmentDto = {
    id: number
    name: string
    description: string
    img: string
    count: number
    fixed: postDto
}