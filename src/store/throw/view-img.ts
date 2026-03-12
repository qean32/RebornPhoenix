import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = {
    view: string,
}

const initialState: stateDto = {
    view: ""
}

const viewImgSlice = createSlice({
    name: 'view-img',
    initialState,
    reducers: {
        swapViewImg(state: stateDto, { payload }: PayloadAction<string>) {
            state.view = payload
        },
    },
})

export const viewImgReducer = viewImgSlice.reducer
export const { swapViewImg } = viewImgSlice.actions