import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { sessionReducer } from './session-store'
import { tmpObjectReducer } from './tmp-object-store'
import { userReducer } from './user-store'
import { objectBeingPushedToSessionReducer } from './object-being-pushed-to-session-store'
import { qReducer } from './q-store'
import { eventReducer } from './event-store'
import { generateRejectToastPayload } from '@/lib/function'

const rejectMwthods = ['pushImg', 'pushUser', 'pushEntity', 'removeEntity', 'pushObject', 'removeObject', 'pushMap',
    'removeMap', 'pushCharacter', 'removeCharacter', 'editBestiary', 'pushToBestiary']

const playModeMiddleware = (store: any) => (next: any) => (action: any) => {
    const type = action.type.split('/')
    if (
        type[0] == 'session-store' &&
        rejectMwthods.includes(type[1])
        && !store.getState('')
            .session.isDevMode
    ) {
        const payload = generateRejectToastPayload()
        next(payload)

        setTimeout(() => {
            next({ type: 'toast-store/removeToast', payload: { id: payload.payload.id } })
        }, 3000)

        return
    }

    return next(action);
};

const rootReducer = combineReducers({
    toast: toastReducer,
    session: sessionReducer ?? '',
    tmpObject: tmpObjectReducer,
    user: userReducer,
    pushedObject: objectBeingPushedToSessionReducer,
    q: qReducer,
    event: eventReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(playModeMiddleware),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()