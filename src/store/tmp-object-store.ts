import { commentType, entityInterface, idType, mapInterface, objectInterface } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state_ = entityInterface | objectInterface | mapInterface
type stateT = state_ & {
    isEntity?: boolean
    isObject?: boolean
    isMap?: boolean
}
export type state = entityInterface | objectInterface | null | idType | commentType | stateT
export type keysTmp =
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
type stateDto = { tmpObject: state, key: keysTmp }

const initialState: stateDto = { tmpObject: null, key: null }

const tmpObjectSlice = createSlice({
    name: 'temp-object-store',
    initialState,
    reducers: {
        swapTmpObject(state: stateDto, { payload: { key, payload } }: PayloadAction<{ payload: state, key: keysTmp }>) {
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