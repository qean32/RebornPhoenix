import { commentDto, entityDto, idDto, mapDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state_ = entityDto | objectDto | mapDto
type stateT = state_ & {
    isEntity?: boolean
    isObject?: boolean
    isMap?: boolean
}
export type state = entityDto | objectDto | null | idDto | commentDto | stateT
export type key =
    'push-entity' |
    'push-object' |
    'push-map' |
    'more-entity' |
    'more-character' |
    'more-object' |
    'update-comment' |
    'delete-comment' |
    'delete-character' |
    'create-character' |
    'delete-session' |
    'create-session' |
    'push-object' |
    null
type stateDto = { tmpObject: state, key: key }

const initialState: stateDto = { tmpObject: null, key: null }

const tmpObjectSlice = createSlice({
    name: 'temp-object-store',
    initialState,
    reducers: {
        swapTmpObject(state: stateDto, { payload: { key, payload } }: PayloadAction<{ payload: state, key: key }>) {
            if (payload && state.tmpObject?.id == payload.id) {
                state.tmpObject = null
                state.key = null
                return
            }
            state.key = key
            state.tmpObject = payload
        },
        clearTmpObject(state: stateDto) {
            state.tmpObject = null
            state.key = null
        }
    },
})

export const tmpObjectReducer = tmpObjectSlice.reducer
export const { swapTmpObject, clearTmpObject } = tmpObjectSlice.actions