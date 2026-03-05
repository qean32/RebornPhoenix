import { _throwC } from "@/model"
import { useAppDispatch, useAppSelector } from "../redux"
import { swapViewImg } from "@/store/throw/view-img"

export const useViewImgThrow = (): _throwC<string> => {
    const dispatch = useAppDispatch()
    const { view } = useAppSelector(state => state.view)

    const swap = (payload: string) => { dispatch(swapViewImg(payload)) }
    const clear = () => { dispatch(swapViewImg("")) }

    return [view, swap, clear]
}