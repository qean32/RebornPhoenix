import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idDto, toastDto } from '@/model'

type stateDto = { toasts: toastDto[] }

const initialState: stateDto = {
    toasts: []
}

const toastSlice = createSlice({
    name: 'toast-store',
    initialState,
    reducers: {
        pushToast: (state: stateDto, { payload }: PayloadAction<Omit<toastDto, 'view'>>) => {
            state.toasts = [...state.toasts, { ...payload, view: true }]
        },
        removeToast: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            state.toasts = [
                // @ts-ignore
                { ...state.toasts.find(item => item.id == payload.id), view: false },
                ...state.toasts.filter(item => item.id != payload.id),
            ]
        },
    },
})

export const toastReducer = toastSlice.reducer
export const { pushToast, removeToast } = toastSlice.actions