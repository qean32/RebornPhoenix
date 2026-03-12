import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: string }

const initialState: stateDto = {
    state: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch(state: stateDto, { payload }: PayloadAction<string>) {
            state.state = payload
        },
    },
})

export const searchReducer = searchSlice.reducer
export const { changeSearch } = searchSlice.actions