import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionInterface, mapInterface, idType, bestiaryItemInterface } from "@/model";
import { characterInterface, entityInterface, objectInterface } from "@/model/entities.interfaces";
import { generateId } from "@/lib/function";

type stateDto = {
    session: sessionInterface, bestiary: bestiaryItemInterface[],
    info: infoDto
    isSet: boolean
}

type infoDto = {
    session: string,
    bestiary: string
}

const initialState: stateDto = {
    isSet: false,
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
    info: {
        session: '',
        bestiary: ''
    }
}

const sessionSlice = createSlice({
    name: 'session-store',
    initialState,
    reducers: {

        // """"""""""""""""""""""""""""""""""""""""""" { other action } """"""""""""""""""""""""""""""""""""""""""" //

        // """"""""""""""""""""""""""""""""""""""""""" { other action } """"""""""""""""""""""""""""""""""""""""""" //

        setSession: (state: stateDto, { payload: { session, bestiary, info, isSet } }: PayloadAction<stateDto>) => {
            state.session = session
            state.bestiary = bestiary
            state.info = info
            state.isSet = isSet
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
            if (!state?.session?.users) {
                state.session.users = id.toString()
            } else if (state?.session?.users?.length < 10) {
                state.session.users = state.session.users + ',' + id
            }
        },

        // """"""""""""""""""""""""""""""""""""""""""" { entity action } """"""""""""""""""""""""""""""""""""""""""" //

        changeEntity: (state: stateDto, { payload: { payload } }: PayloadAction<{
            payload:
            Pick<entityInterface, 'id' | 'status'> |
            Pick<entityInterface, 'id' | 'size'> |
            Pick<entityInterface, 'position' | 'id'>
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
        } }: PayloadAction<entityInterface>) => {
            if (state.session.mapsData[state.session.currentMap.id].queue.length < 16) {

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
            }
        },

        removeEntity: (state: stateDto, { payload: { id } }: PayloadAction<idType>) => {
            state.session.mapsData[state.session.currentMap.id].queue
                = state.session.mapsData[state.session.currentMap.id].queue.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { object action } """"""""""""""""""""""""""""""""""""""""""" //

        pushObject: (state: stateDto, { payload }: PayloadAction<objectInterface>) => {
            if (state?.session?.mapsData[state?.session?.currentMap?.id].objects?.length < 10) {

                state.session.mapsData[state.session.currentMap.id].objects = [
                    ...state.session.mapsData[state.session.currentMap.id].objects,
                    { ...payload, id: generateId() }
                ]
            }
        },

        changeObject: (state: stateDto, { payload: { payload } }: PayloadAction<{
            payload:
            Pick<objectInterface, 'id' | 'status'> |
            Pick<objectInterface, 'id' | 'size'> |
            Pick<objectInterface, 'position' | 'id'>
        }>) => {
            state.session.mapsData[state.session.currentMap.id].objects = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].objects.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.session.mapsData[state.session.currentMap.id].objects.find(item => item.id == payload.id), ...payload }
            ]
        },

        removeObject: (state: stateDto, { payload: { id } }: PayloadAction<idType>) => {
            state.session.mapsData[state.session.currentMap.id].objects
                = state.session.mapsData[state.session.currentMap.id].objects.filter(item => item.id != id)
        },

        scaleObject: (state: stateDto, { payload: { object, operation } }: PayloadAction<{ object: objectInterface, operation: -1 | 1 }>) => {
            let newSize = object.size ?? 1
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

        swapCurrentMap: (state: stateDto, { payload }: PayloadAction<idType>) => {
            if (state.session.maps.find(item => item.id == payload.id)) {
                state.session.currentMap =
                    state.session.maps.find(item => item.id == payload.id)
                    ??
                    state.session.currentMap
            }
        },

        pushMap: (state: stateDto, { payload }: PayloadAction<mapInterface>) => {
            if (state?.session?.maps?.length < 30) {

                const id = generateId()
                if (!state.session.maps) {
                    state.session.maps = [
                        { ...payload, id }
                    ]
                } else {
                    state.session.maps = [
                        ...state.session.maps,
                        { ...payload, id }
                    ]
                }
                state.session.mapsData[id] = {
                    objects: [],
                    queue: [],
                    characters: []
                }
            }
        },

        removeMap: (state: stateDto, { payload: { id } }: PayloadAction<idType>) => {
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

        pushCharacter: (state: stateDto, { payload }: PayloadAction<characterInterface>) => {
            if (!state?.session?.characters?.find(item => item.name == payload.name)) {
                state.session.characters = [
                    ...state.session.characters,
                    { ...payload, id: generateId(), size: 2, status: 'stable', position: { x: 0, y: 0 } }
                ]
            }


            state.session.mapsData[state.session.currentMap.id].queue = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].queue,
                // @ts-ignore
                { ...payload, id: generateId(), size: 2, status: 'stable', position: { x: 0, y: 0 }, path: `${process.env.SERVER_HOST_STORAGE}${payload.path}` }
            ]
        },

        removeCharacter: (state: stateDto, { payload: { id } }: PayloadAction<idType>) => {
            state.session.characters = state.session.characters.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { queue action } """"""""""""""""""""""""""""""""""""""""""" //

        changeQueue: (state: stateDto, { payload: { queue } }: PayloadAction<{ queue: any[] }>) => {
            state.session.mapsData[state.session.currentMap.id].queue = queue
        },

        nextQueue: (state: stateDto) => {
            if (state.session.mapsData[state.session.currentMap.id].queue[1]) {

                state.session.mapsData[state.session.currentMap.id].queue = [
                    state.session.mapsData[state.session.currentMap.id].queue[1],
                    ...state.session.mapsData[state.session.currentMap.id].queue.slice(2),
                    state.session.mapsData[state.session.currentMap.id].queue[0],
                ]
            }
        },

        prevQueue: (state: stateDto) => {
            if (state.session.mapsData[state.session.currentMap.id].queue[1]) {

                state.session.mapsData[state.session.currentMap.id].queue = [
                    // @ts-ignore
                    state.session.mapsData[state.session.currentMap.id].queue.at(-1),
                    ...state.session.mapsData[state.session.currentMap.id].queue.slice(1, -1),
                    state.session.mapsData[state.session.currentMap.id].queue[0],
                ]
            }
        },

        // """"""""""""""""""""""""""""""""""""""""""" { bestiary action } """"""""""""""""""""""""""""""""""""""""""" //

        editBestiary: (state: stateDto, { payload }: PayloadAction<entityInterface>) => {
            state.bestiary = [
                ...state.bestiary.filter(item => item.idInBestiary != payload.id),
                { ...state.bestiary.find(item => item.idInBestiary == payload.id), ...payload }
            ]
        },

        pushToBestiary: (state: stateDto, { payload }: PayloadAction<entityInterface>) => {
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
    pushUser,
} = sessionSlice.actions