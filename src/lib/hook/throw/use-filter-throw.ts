import { useAppDispatch, useAppSelector } from "../redux"
import { changeFilterPost, stateFilter } from "@/store/throw/filter"

export const useFilterThrow = (): [stateFilter, (payload: { tags?: string; date?: string }) => void] => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.filter)

    const change = (payload: {
        tags?: string
        date?: string
        // @ts-ignore
    }) => { dispatch(changeFilterPost(payload)) }

    return [state, change]
}