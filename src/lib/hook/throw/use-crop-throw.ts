import { swapCrop } from "@/store/throw/crop"
import { useAppDispatch, useAppSelector } from "../redux"
import { _throwC } from "@/model"

export const useCropThrow = (): _throwC<string> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.crop)

    const swap = (payload: string) => { dispatch(swapCrop(payload)) }
    const clear = () => { dispatch(swapCrop("")) }

    return [state, swap, clear]
}
