import { userInterface } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { user: userInterface | null }

const initialState: stateDto = { user: null }

const userSlice = createSlice({
    name: 'user-store',
    initialState,
    reducers: {
        setUser(state: stateDto, { payload }: PayloadAction<userInterface | null>) {
            state.user = payload
        },
    },
})

export const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions