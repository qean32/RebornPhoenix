import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = {
    logs: string[],
    mode: "dev" | "play"
}

const initialState: stateDto = {
    logs: [],
    mode: "dev",
}

const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        pushLog(state: stateDto, { payload }: PayloadAction<{ log: string }>) {
            state.logs = [
                payload.log,
                ...state.logs,
            ]
        },
        swapMode: (state: stateDto) => {
            state.mode = state.mode == "dev" ? "play" : "dev"
        },
    },
})

export const logReducer = logSlice.reducer
export const { pushLog, swapMode } = logSlice.actions
