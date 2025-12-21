import { entityDto, mapDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = entityDto | objectDto | mapDto
type stateT = state & {
    isEntity?: boolean
    isObject?: boolean
    isMap?: boolean
} | null

type stateDto = { object: stateT }

const initialState: stateDto = { object: null }

const objectBeingPushedToSessionSlice = createSlice({
    name: 'object-being-pushed-to-session-store',
    initialState,
    reducers: {
        swapObjectBeingPushedToSession(state: stateDto, { payload: { object } }: PayloadAction<{ object: stateT }>) {
            state.object = object
        },
    },
})

export const objectBeingPushedToSessionReducer = objectBeingPushedToSessionSlice.reducer
export const { swapObjectBeingPushedToSession } = objectBeingPushedToSessionSlice.actions