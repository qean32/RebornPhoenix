import { swapAnchor } from "@/store/throw/anchor"
import { useAppDispatch, useAppSelector } from "../redux"
import { _throw } from "@/model"

export const useAnchorThrow = (): _throw<string> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.anchor)

    const swap = (payload: string) => { dispatch(swapAnchor(payload)) }

    return [state, swap]
}