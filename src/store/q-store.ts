import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type keysQ =
    'contentprofile' |
    'pushcharacter' |
    'viewimg' |
    'contentsession' |
    'actionentity' |
    'anchorlink' |
    'search' |
    'grid' |
    'select' |
    'date' |
    'forceupadeteuser' |
    'tags' |
    'token'

type stateDto = {
    q: Record<keysQ, string>
}

const initialState: stateDto = {
    q: {
        contentprofile: '',
        viewimg: '',
        contentsession: '',
        pushcharacter: '',
        actionentity: '',
        anchorlink: '',
        search: '',
        forceupadeteuser: '',
        grid: '',
        select: '',
        date: '',
        tags: '',
        token: ''
    }
}

const qSlice = createSlice({
    name: 'other-q-store',
    initialState,
    reducers: {
        pushQuery: (state: stateDto, { payload: { key, value } }: PayloadAction<{ key: keysQ, value: string }>) => {
            state.q[key] = value
        },
        clearQuery: (state: stateDto) => {
            state.q = initialState.q
        }
    },
})

export const qReducer = qSlice.reducer
export const { pushQuery, clearQuery } = qSlice.actions