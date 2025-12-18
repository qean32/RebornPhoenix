import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { notes: string }

const initialState: stateDto = { notes: '' }

const notesSlice = createSlice({
    name: 'notes-store',
    initialState,
    reducers: {
        changeNotes(state: stateDto, { payload: { notes } }: PayloadAction<{ notes: string }>) {
            state.notes = notes
        },
    },
})

export const notesReducer = notesSlice.reducer
export const { changeNotes } = notesSlice.actions