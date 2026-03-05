import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type stateFilter = {
    tags: string
    date: string
}
const initialState: stateFilter = {
    date: "",
    tags: "",
}

const filterSlice = createSlice({
    name: 'post-filter',
    initialState,
    reducers: {
        changeFilterPost(state: stateFilter, { payload }: PayloadAction<stateFilter>) {
            state = { ...state, ...payload }
        },
    },
})

export const filterReducer = filterSlice.reducer
export const { changeFilterPost } = filterSlice.actions