import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast'
import { sessionReducer } from './session'
import { tmpObjectReducer } from './tmp-object'
import { userReducer } from './user'
import { generateAddToastPayload, generateRejectToastPayload } from '@/lib/function'
import { logReducer } from './log'
import { gridReducer } from './throw/grid'
import { anchorReducer } from './throw/anchor'
import { contentReducer } from './throw/content'
import { entityActionReducer } from './throw/entity-action'
import { filterReducer } from './throw/filter'
import { searchReducer } from './throw/search'
import { viewImgReducer } from './throw/view-img'
import { selectFilterReducer } from './throw/select-filter'
import { pushCharacterReducer } from './throw/push-character'

const rejectMwthods = ['pushImg', 'pushUser', 'pushEntity', 'removeEntity', 'pushObject', 'removeObject', 'pushMap',
    'removeMap', 'pushCharacter', 'removeCharacter', 'editBestiary', 'pushToBestiary']

const playModeMiddleware = (store: any) => (next: any) => (action: any) => {
    const type = action.type.split('/')
    if (
        type[0] == 'session' &&
        rejectMwthods.includes(type[1])
        && !store.getState('').log.isDevMode
    ) {
        const payload = generateRejectToastPayload()
        next(payload)

        setTimeout(() => {
            next({ type: 'toast/removeToast', payload: { id: payload.payload.id } })
        }, 3000)

        return
    }

    if (
        type[0] == 'session' &&
        (type[1] == 'pushEntity' || type[1] == 'pushObject' || type[1] == 'pushMap')
    ) {
        const payload = generateAddToastPayload(action.payload.name)
        next(payload)

        setTimeout(() => {
            next({ type: 'toast/removeToast', payload: { id: payload.payload.id } })
        }, 3000)
    }

    return next(action);
};

const rootReducer = combineReducers({
    toast: toastReducer,
    session: sessionReducer ?? '',
    tmpObject: tmpObjectReducer,
    user: userReducer,
    log: logReducer,

    anchor: anchorReducer,
    content: contentReducer,
    entityAction: entityActionReducer,
    grid: gridReducer,
    filter: filterReducer,
    search: searchReducer,
    selectFilter: selectFilterReducer,
    view: viewImgReducer,
    pushCharacter: pushCharacterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(playModeMiddleware),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()