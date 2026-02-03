import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type keys =
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
    q: {
        contentprofile: string
        viewimg: string
        contentsession: string
        pushcharacter: string
        actionentity: string
        anchorlink: string
        search: string
        forceupadeteuser: string
        grid: string
        select: string
        date: string
        tags: string
        token: string
    }
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
        pushQuery: (state: stateDto, { payload: { key, value } }: PayloadAction<{ key: keys, value: string }>) => {
            state.q[key] = value
        },
        clearQuery: (state: stateDto) => {
            state.q = initialState.q
        }
    },
})

export const qReducer = qSlice.reducer
export const { pushQuery, clearQuery } = qSlice.actions