import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = {
    logs: string[],
    isDevMode: boolean
}

const initialState: stateDto = {
    logs: [],
    isDevMode: true,
}

const logSlice = createSlice({
    name: 'user-store',
    initialState,
    reducers: {
        pushLog(state: stateDto, { payload }: PayloadAction<{ log: string }>) {
            console.log(payload.log);

            state.logs = [
                payload.log,
                ...state.logs,
            ]
        },
        swapMode: (state: stateDto) => {
            state.isDevMode = !state.isDevMode
        },
    },
})

export const logReducer = logSlice.reducer
export const { pushLog, swapMode } = logSlice.actions