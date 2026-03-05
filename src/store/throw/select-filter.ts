import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: number }

const initialState: stateDto = {
    state: 0
}

const selectFilterSlice = createSlice({
    name: 'select-filter',
    initialState,
    reducers: {
        swapSelectFilter(state: stateDto, { payload }: PayloadAction<number>) {
            state.state = payload
        },
    },
})

export const selectFilterReducer = selectFilterSlice.reducer
export const { swapSelectFilter } = selectFilterSlice.actions