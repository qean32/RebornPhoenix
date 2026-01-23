import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionDto, mapDto, idDto, bestiaryItem } from "@/model";
import { characterDto, entityDto, objectDto } from "@/model/entities.dto";
import { generateId } from "@/lib/function";

type stateDto = { session: sessionDto, bestiary: bestiaryItem[] }

const initialState: stateDto = {
    session: {
        users: '',
        characters: [],
        imgs: '',
        note: '',
        // @ts-ignore
        currentMap: null,
        DungeonMaster: { ava: '', email: '', id: 0, name: '', role: 0, ban: false },
        id: 0,
        maps: [],
        mapsData: {
            '0': {
                objects: [],
                queue: [],
                characters: []
            }
        },
        name: ''
    },
    bestiary: [],
}

const sessionSlice = createSlice({
    name: 'session-store',
    initialState,
    reducers: {

        setSession: (state: stateDto, { payload: { session, bestiary } }: PayloadAction<{ session: sessionDto, bestiary: bestiaryItem[] }>) => {
            state.session = session
            state.bestiary = bestiary
        },

        pushImg: (state: stateDto, { payload: { img } }: PayloadAction<{ img: string }>) => {
            state.session = {
                ...state.session,
                imgs: state.session.imgs + ',' + img
            }
        },

        pushNote: (state: stateDto, { payload: { note } }: PayloadAction<{ note: string }>) => {
            state.session.note = note
        },

        pushUser: (state: stateDto, { payload: { id } }: PayloadAction<{ id: number }>) => {
            state.session.users = state.session.users + ',' + id
        },

        // """"""""""""""""""""""""""""""""""""""""""" { entity action } """"""""""""""""""""""""""""""""""""""""""" //

        changeEntity: (state: stateDto, { payload: { payload } }: PayloadAction<{
            payload:
            Pick<entityDto, 'id' | 'status'> |
            Pick<entityDto, 'id' | 'size'> |
            Pick<entityDto, 'position' | 'id'>
        }>) => {
            state.session.mapsData[state.session.currentMap.id].queue = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].queue.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.session.mapsData[state.session.currentMap.id].queue.find(item => item.id == payload.id), ...payload }
            ]
        },
        pushEntity: (state: stateDto, { payload: {
            description,
            idInBestiary,
            initiative,
            name,
            path,
            size,
            source,
            status
        } }: PayloadAction<entityDto>) => {
            const id = generateId()

            state.session.mapsData[state.session.currentMap.id].queue = [
                ...state.session.mapsData[state.session.currentMap.id].queue,
                { id, idInBestiary, initiative, status, source, size, path, name }
            ]

            if (!state.bestiary.find(item => item.idInBestiary == idInBestiary)) {
                state.bestiary = [
                    ...state.bestiary,
                    { id, idInBestiary, initiative, source, path, name, description, size, status }
                ]
            }
        },
        removeEntity: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.mapsData[state.session.currentMap.id].queue
                = state.session.mapsData[state.session.currentMap.id].queue.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { object action } """"""""""""""""""""""""""""""""""""""""""" //

        pushObject: (state: stateDto, { payload }: PayloadAction<objectDto>) => {
            state.session.mapsData[state.session.currentMap.id].objects = [
                ...state.session.mapsData[state.session.currentMap.id].objects,
                { ...payload, id: generateId() }
            ]
        },
        changeObject: (state: stateDto, { payload: { payload } }: PayloadAction<{
            payload:
            Pick<objectDto, 'id' | 'status'> |
            Pick<objectDto, 'id' | 'size'> |
            Pick<objectDto, 'position' | 'id'>
        }>) => {
            state.session.mapsData[state.session.currentMap.id].objects = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].objects.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.session.mapsData[state.session.currentMap.id].objects.find(item => item.id == payload.id), ...payload }
            ]
        },
        removeObject: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.mapsData[state.session.currentMap.id].objects
                = state.session.mapsData[state.session.currentMap.id].objects.filter(item => item.id != id)
        },
        scaleObject: (state: stateDto, { payload: { object, operation } }: PayloadAction<{ object: objectDto, operation: -1 | 1 }>) => {
            let newSize = object.size
            if (newSize > 3) {
                newSize = 1
            } else {
                newSize += operation
            }
            state.session.mapsData[state.session.currentMap.id].objects
                = [
                    // @ts-ignore
                    ...state.session.mapsData[state.session.currentMap.id].objects.filter(item => item.id != object.id),
                    // @ts-ignore
                    { ...object, size: newSize }
                ]
        },

        // """"""""""""""""""""""""""""""""""""""""""" { map action } """"""""""""""""""""""""""""""""""""""""""" //

        swapCurrentMap: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            if (state.session.maps.find(item => item.id == payload.id)) {
                state.session.currentMap =
                    state.session.maps.find(item => item.id == payload.id)
                    ??
                    state.session.currentMap
            }
        },
        pushMap: (state: stateDto, { payload }: PayloadAction<mapDto>) => {
            const id = generateId()
            state.session.maps = [
                ...state.session.maps,
                { ...payload, id }
            ]
            state.session.mapsData[id] = {
                objects: [],
                queue: [],
                characters: []
            }
        },
        removeMap: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.maps = state.session.maps.filter(item => item.id != id)
            state.session.mapsData = {
                ...state.session.mapsData,
                [id]: null
            }
            if (id == state.session.currentMap.id) {
                // @ts-ignore
                state.session.currentMap = state.session.maps.find(item => item.id == (
                    // @ts-ignore
                    Object.entries(state.session.mapsData)
                        .find(item => item[1] != null)[0]
                )) ?? null
            }
        },

        // """"""""""""""""""""""""""""""""""""""""""" { character action } """"""""""""""""""""""""""""""""""""""""""" //

        pushCharacter: (state: stateDto, { payload }: PayloadAction<characterDto>) => {
            if (!state.session.characters.find(item => item.name == payload.name)) {
                state.session.characters = [
                    ...state.session.characters,
                    { ...payload, id: generateId(), size: 2, status: 'stable', position: { x: 0, y: 0 } }
                ]
            }


            state.session.mapsData[state.session.currentMap.id].queue = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].queue,
                // @ts-ignore
                { ...payload, id: generateId(), size: 2, status: 'stable', position: { x: 0, y: 0 } }
            ]
        },
        removeCharacter: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.characters = state.session.characters.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { queue action } """"""""""""""""""""""""""""""""""""""""""" //

        changeQueue: (state: stateDto, { payload: { queue } }: PayloadAction<{ queue: any[] }>) => {
            state.session.mapsData[state.session.currentMap.id].queue = queue
        },
        nextQueue: (state: stateDto) => {
            state.session.mapsData[state.session.currentMap.id].queue = [
                state.session.mapsData[state.session.currentMap.id].queue[1],
                ...state.session.mapsData[state.session.currentMap.id].queue.slice(2),
                state.session.mapsData[state.session.currentMap.id].queue[0],
            ]
        },
        prevQueue: (state: stateDto) => {
            state.session.mapsData[state.session.currentMap.id].queue = [
                // @ts-ignore
                state.session.mapsData[state.session.currentMap.id].queue.at(-1),
                ...state.session.mapsData[state.session.currentMap.id].queue.slice(1, -1),
                state.session.mapsData[state.session.currentMap.id].queue[0],
            ]
        },

        // """"""""""""""""""""""""""""""""""""""""""" { bestiary action } """"""""""""""""""""""""""""""""""""""""""" //

        editBestiary: (state: stateDto, { payload }: PayloadAction<entityDto>) => {
            state.bestiary = [
                ...state.bestiary.filter(item => item.idInBestiary != payload.id),
                { ...state.bestiary.find(item => item.idInBestiary == payload.id), ...payload }
            ]
        },
        pushToBestiary: (state: stateDto, { payload }: PayloadAction<entityDto>) => {
            state.bestiary = [...state.bestiary, payload]
        },
    },
})

export const sessionReducer = sessionSlice.reducer
export const {
    changeEntity,
    removeEntity,
    pushEntity,
    pushObject,
    changeObject,
    swapCurrentMap,
    removeObject,
    pushMap,
    removeMap,
    changeQueue,
    nextQueue,
    prevQueue,
    pushToBestiary,
    editBestiary,
    scaleObject,
    pushCharacter,
    removeCharacter,
    setSession,
    pushImg,
    pushNote,
    pushUser
} = sessionSlice.actions