import { swapEntityAction } from "@/store/throw/entity-action"
import { useAppDispatch, useAppSelector } from "../redux"
import { _throwC } from "@/model"

export const usePushCharacterThrow = (): _throwC<number> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.pushCharacter)

    const swap = (payload: number) => { dispatch(swapEntityAction(payload)) }
    const claer = () => { dispatch(swapEntityAction(0)) }

    return [state, swap, claer]
}