import { _throw } from "@/model"
import { useAppDispatch, useAppSelector } from "../redux"
import { swapContent } from "@/store/throw/content"

export const useContentThrow = (): _throw<string> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.content)

    const swap = (payload: string) => { dispatch(swapContent(payload)) }

    return [state, swap]
}