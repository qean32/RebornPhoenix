import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast'
import { sessionReducer } from './session'
import { tmpObjectReducer } from './tmp-object'
import { userReducer } from './user'
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
import { sessionMiddleware } from './middleware'
import { cropReducer } from './throw/crop'


const rootReducer = combineReducers({
    toast: toastReducer,
    session: sessionReducer ?? '',
    tmpObject: tmpObjectReducer,
    user: userReducer,
    log: logReducer,

    anchor: anchorReducer,
    crop: cropReducer,
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sessionMiddleware),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
