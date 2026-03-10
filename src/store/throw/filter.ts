import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type stateFilter = {
    state: {
        tags: string
        date: string
    }
}
const initialState: stateFilter = {
    state: {
        date: "",
        tags: "",
    }
}

const filterSlice = createSlice({
    name: 'post-filter',
    initialState,
    reducers: {
        changeFilterPost(state: stateFilter, { payload }: PayloadAction<stateFilter>) {
            state.state = { ...state.state, ...payload }
        },
    },
})

export const filterReducer = filterSlice.reducer
export const { changeFilterPost } = filterSlice.actions
