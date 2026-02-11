import { entityInterface, idType, objectInterface } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type state = entityInterface | objectInterface | idType | null
export type keysEvant =
    'swap-map' |
    'change-object' |
    'change-entity' |
    'dice' |
    null
type stateDto = { payload: state, key: keysEvant }

const initialState: stateDto = { payload: null, key: null }

const eventSlice = createSlice({
    name: 'event-store',
    initialState,
    reducers: {
        changeEvent(state: stateDto, { payload: { key, payload } }: PayloadAction<{ payload: state, key: keysEvant }>) {
            state.key = key
            state.payload = payload
        },
        clearEvent(state: stateDto) {
            state.payload = null
            state.key = null
        }
    },
})

export const eventReducer = eventSlice.reducer
export const { changeEvent, clearEvent } = eventSlice.actions