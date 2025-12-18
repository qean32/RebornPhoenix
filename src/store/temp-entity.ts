import { entityDto, idDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { tmpEntity: entityDto | objectDto | null | idDto }

const initialState: stateDto = { tmpEntity: null }

const tempEntitySlice = createSlice({
    name: 'temp-entity-store',
    initialState,
    reducers: {
        swapTmpEntity(state: stateDto, { payload }: PayloadAction<entityDto | objectDto | idDto>) {
            if (state.tmpEntity?.id == payload.id) {
                state.tmpEntity = null
                return
            }
            state.tmpEntity = payload
        },
        clearTmpEntity(state: stateDto) {
            state.tmpEntity = null
        }
    },
})

export const tempEntityReducer = tempEntitySlice.reducer
export const { swapTmpEntity, clearTmpEntity } = tempEntitySlice.actions