import { useAppDispatch, useAppSelector } from "../redux"
import { swapGrid } from "@/store/throw/grid"

export const useGridThrow = (): [boolean, () => void] => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.grid)

    const swap = () => { dispatch(swapGrid()) }

    return [state, swap]
}