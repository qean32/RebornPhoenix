import { createSlice } from "@reduxjs/toolkit";

type stateDto = { state: boolean }

const initialState: stateDto = {
    state: false
}

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        swapGrid(state: stateDto) {
            state.state = !state.state
        },
    },
})

export const gridReducer = gridSlice.reducer
export const { swapGrid } = gridSlice.actions