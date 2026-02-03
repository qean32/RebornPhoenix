import { userDto } from "./user.dto"

export interface banReasonDto {
    admin: userDto
    reason: string
    date: string
}