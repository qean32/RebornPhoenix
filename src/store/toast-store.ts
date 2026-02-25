import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idType, toastType } from '@/model'

type stateDto = { toasts: toastType[] }

const initialState: stateDto = {
    toasts: []
}

const toastSlice = createSlice({
    name: 'toast-store',
    initialState,
    reducers: {
        pushToast: (state: stateDto, { payload }: PayloadAction<Omit<toastType, 'view'>>) => {
            state.toasts = [...state.toasts, { ...payload, view: true }]
        },
        removeToast: (state: stateDto, { payload }: PayloadAction<idType>) => {
            state.toasts = [
                // @ts-ignore
                ...state.toasts.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.toasts.find(item => item.id == payload.id), view: false },
            ]
        },
    },
})

export const toastReducer = toastSlice.reducer
export const { pushToast, removeToast } = toastSlice.actions