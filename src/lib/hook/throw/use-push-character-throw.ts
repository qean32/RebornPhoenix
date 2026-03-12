import { useAppDispatch, useAppSelector } from "../redux"
import { _throwC } from "@/model"
import { swapPushCharacter } from "@/store/throw/push-character"

export const usePushCharacterThrow = (): _throwC<number> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.pushCharacter)

    const swap = (payload: number) => { dispatch(swapPushCharacter(payload)) }
    const claer = () => { dispatch(swapPushCharacter(0)) }

    return [state, swap, claer]
}