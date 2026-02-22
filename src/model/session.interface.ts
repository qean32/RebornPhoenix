import { entityInterface, mapInterface, objectInterface, userInterface } from "."
import { characterInterface } from "./entities.interfaces"

export interface sessionInterface {
    id: number
    name: string
    currentMap: mapInterface
    DungeonMaster: userInterface
    DM: number
    maps: mapInterface[]
    characters: characterInterface[]
    mapsData: mapsDataInterface,
    imgs: string
    note: string
    users: string
}

export interface bestiaryItemInterface extends entityInterface {
}

export interface mapsDataInterface {
    [key: string]: {
        objects: objectInterface[]
        queue: Omit<entityInterface, 'description'>[]
        characters: characterInterface[]
    }
}

export type sessionModeType = 'game' | 'dev'