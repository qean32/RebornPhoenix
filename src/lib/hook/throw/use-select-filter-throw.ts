import { _throw } from "@/model"
import { useAppDispatch, useAppSelector } from "../redux"
import { swapSelectFilter } from "@/store/throw/select-filter"

export const useSelectFilterThrow = (): _throw<number> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.selectFilter)

    const swap = (payload: number) => { dispatch(swapSelectFilter(payload)) }

    return [state, swap]
}