import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { sessionReducer } from './session-store'
import { tmpObjectReducer } from './tmp-object'
import { userReducer } from './user-store'
import { objectBeingPushedToSessionReducer } from './object-being-pushed-to-session-store'
import { qReducer } from './q-store'


const rootReducer = combineReducers({
    toast: toastReducer,
    session: sessionReducer ?? '',
    tmpObject: tmpObjectReducer,
    user: userReducer,
    pushedObject: objectBeingPushedToSessionReducer,
    q: qReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()