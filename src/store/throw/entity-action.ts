import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: number }

const initialState: stateDto = {
    state: 0
}

const entityActionSlice = createSlice({
    name: 'entity-action',
    initialState,
    reducers: {
        swapEntityAction(state: stateDto, { payload }: PayloadAction<number>) {
            state.state = payload
        },
    },
})

export const entityActionReducer = entityActionSlice.reducer
export const { swapEntityAction } = entityActionSlice.actions