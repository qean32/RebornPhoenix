import { commentDto, entityDto, idDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = entityDto | objectDto | null | idDto | commentDto
type stateT = state & {
    isComment?: boolean
    isEntity?: boolean
    isObject?: boolean
    isMap?: boolean
} | null

type stateDto = { tmpObject: stateT }

const initialState: stateDto = { tmpObject: null }

const tempEntitySlice = createSlice({
    name: 'temp-entity-store',
    initialState,
    reducers: {
        swapTmpObject(state: stateDto, { payload }: PayloadAction<stateT>) {
            if (payload && state.tmpObject?.id == payload.id) {
                state.tmpObject = null
                return
            }
            state.tmpObject = payload
        },
        clearTmpEntity(state: stateDto) {
            state.tmpObject = null
        }
    },
})

export const tempEntityReducer = tempEntitySlice.reducer
export const { swapTmpObject, clearTmpEntity } = tempEntitySlice.actions