import { changeEvent, keysEvant } from "@/store/event-store"
import { useAppDispatch, useAppSelector } from "./redux"
import { entityInterface, objectInterface, idType } from "@/model"

export const useEvent = () => {
    const dispatch = useAppDispatch()
    const event = useAppSelector(state => state.event)

    const _changeEvent = (payload: {
        payload: entityInterface | objectInterface | idType | null,
        key: keysEvant
    }) => dispatch(changeEvent(payload))

    return { event, changeEvent: _changeEvent }
}