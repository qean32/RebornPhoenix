import { commentDto, entityDto, idDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = entityDto | objectDto | null | idDto | commentDto
export type key = 'push-entity' | 'push-object' | 'push-map' | 'update-comment' | null | 'more-entity' | 'more-character' | 'more-object'
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