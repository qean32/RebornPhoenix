import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: string }

const initialState: stateDto = {
    state: ''
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        swapContent(state: stateDto, { payload }: PayloadAction<string>) {
            state.state = payload
        },
    },
})

export const contentReducer = contentSlice.reducer
export const { swapContent } = contentSlice.actions