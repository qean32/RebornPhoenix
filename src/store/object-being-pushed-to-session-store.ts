import { entityDto, mapDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { object: entityDto | mapDto | objectDto | null | any }

const initialState: stateDto = { object: null }

const objectBeingPushedToSessionSlice = createSlice({
    name: 'object-being-pushed-to-session-store',
    initialState,
    reducers: {
        swapObjectBeingPushedToSession(state: stateDto, { payload: { object } }: PayloadAction<{ object: entityDto | mapDto | objectDto }>) {
            state.object = object
        },
    },
})

export const objectBeingPushedToSessionReducer = objectBeingPushedToSessionSlice.reducer
export const { swapObjectBeingPushedToSession } = objectBeingPushedToSessionSlice.actions