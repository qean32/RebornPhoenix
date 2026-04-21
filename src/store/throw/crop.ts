import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: string }

const initialState: stateDto = {
    state: ''
}

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        swapCrop(state: stateDto, { payload }: PayloadAction<string>) {
            state.state = payload
        },
    },
})

export const cropReducer = cropSlice.reducer
export const { swapCrop } = cropSlice.actions
