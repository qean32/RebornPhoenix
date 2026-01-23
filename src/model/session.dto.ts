import { entityDto, mapDto, objectDto, userDto } from "."
import { characterDto } from "./entities.dto"

export interface sessionDto {
    id: string | number
    name: string
    currentMap: mapDto
    DungeonMaster: userDto
    maps: mapDto[]
    characters: characterDto[]
    mapsData: mapsDataDto,
    imgs: string
    note: string
}

export interface bestiaryItem extends entityDto {
}

export interface mapsDataDto {
    [key: string]: {
        objects: objectDto[]
        queue: Omit<entityDto, 'description'>[]
        characters: characterDto[]
    }
}