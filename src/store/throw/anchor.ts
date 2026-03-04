import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: string }

const initialState: stateDto = {
    state: ''
}

const anchorSlice = createSlice({
    name: 'anchor',
    initialState,
    reducers: {
        swapAnchor(state: stateDto, { payload }: PayloadAction<string>) {
            state.state = payload
        },
    },
})

export const anchorReducer = anchorSlice.reducer
export const { swapAnchor } = anchorSlice.actions