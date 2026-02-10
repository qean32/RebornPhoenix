import { idType } from "./id.type"
import { coordinateType } from "./position.type"
import { userInterface } from "./user.interface"

interface abstractEntityInterface extends idType {
    source: sourceInterface
    position?: coordinateType
    name: string
    path: string
    size: 1 | 2 | 3 | 4
}

interface sourceInterface extends idType {
    name: string
}

export type statusType = 'stable' | 'dead' | 'stan' | 'hidden'

export interface entityInterface extends abstractEntityInterface {
    idInBestiary: number
    description: string
    status: statusType
    initiative: number
}

export interface characterInterface extends Omit<abstractEntityInterface, "source"> {
    status: statusType
    user: userInterface
}

export interface mapInterface extends Omit<abstractEntityInterface, "position" | "size"> {
}

export interface objectInterface extends abstractEntityInterface {
    status: '' | 'hidden'
}