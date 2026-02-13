import { userStorageKey } from "@/config";
import { userInterface } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type stateDto = { user: userInterface | null, _try: boolean }

const userdata = Cookies.get(userStorageKey)
const initialState: stateDto = {
    user: userdata ? JSON.parse(Cookies.get(userStorageKey) as string) : null, _try: false
}

const userSlice = createSlice({
    name: 'user-store',
    initialState,
    reducers: {
        setUser(state: stateDto, { payload }: PayloadAction<userInterface | null>) {
            state.user = payload
        },
        swapTry(state: stateDto) {
            state._try = !state._try
        }
    },
})

export const userReducer = userSlice.reducer
export const { setUser, swapTry } = userSlice.actions