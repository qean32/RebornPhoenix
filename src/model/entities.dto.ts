import { idDto } from "./id.dto"
import { coordinateDto } from "./position.dto"
import { userDto } from "./user.dto"

interface abstractEntity extends idDto {
    source: sourceDto
    position?: coordinateDto
    name: string
    path: string
    size: 1 | 2 | 3 | 4
}

interface sourceDto extends idDto {
    name: string
}

export type statusDto = 'stable' | 'dead' | 'stan' | 'hidden'

export interface entityDto extends abstractEntity {
    idInBestiary: number
    description: string
    status: statusDto
    initiative: number
}

export interface characterDto extends Omit<abstractEntity, "source"> {
    status: statusDto
    user: userDto
}

export interface mapDto extends Omit<abstractEntity, "position" | "size"> {
}

export interface objectDto extends abstractEntity {
    status: '' | 'hidden'
}