import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { state: number }

const initialState: stateDto = {
    state: 0
}

const pushCharacterSlice = createSlice({
    name: 'push-cahracter',
    initialState,
    reducers: {
        swapPushCharacter(state: stateDto, { payload }: PayloadAction<number>) {
            state.state = payload
        },
    },
})

export const pushCharacterReducer = pushCharacterSlice.reducer
export const { swapPushCharacter } = pushCharacterSlice.actions