import { entityInterface, mapInterface, objectInterface, userInterface } from "."
import { characterInterface } from "./entities.interfaces"

export interface sessionInterface {
    id: string | number
    name: string
    currentMap: mapInterface
    DungeonMaster: userInterface
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