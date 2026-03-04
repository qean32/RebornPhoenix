import { swapEntityAction } from "@/store/throw/entity-action"
import { useAppDispatch, useAppSelector } from "../redux"
import { _throw } from "@/model"

export const useEntityActionThrow = (): _throw<number> => {
    const dispatch = useAppDispatch()
    const { state } = useAppSelector(state => state.entityAction)

    const swap = (payload: number) => { dispatch(swapEntityAction(payload)) }

    return [state, swap]
}