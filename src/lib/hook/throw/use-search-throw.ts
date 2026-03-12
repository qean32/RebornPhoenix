import { changeSearch } from "@/store/throw/search"
import { useAppDispatch, useAppSelector } from "../redux"
import { _throw } from "@/model"

export const useSearchThrow = (): _throw<string> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.search)

    const change = (payload: string) => { dispatch(changeSearch(payload)) }

    return [state, change]
}