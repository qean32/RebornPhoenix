import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: string }

const initialState: stateDto = {
    state: 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'
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
