import { userInterface } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { user: userInterface | null, _try: boolean }

const initialState: stateDto = {
    user: null, _try: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: stateDto, { payload }: PayloadAction<userInterface | null>) {
            state.user = payload
        },
        onTry(state: stateDto) {
            state._try = true
        }
    },
})

export const userReducer = userSlice.reducer
export const { setUser, onTry } = userSlice.actions
