import { entityInterface, mapInterface, objectInterface } from "@/model"
import { useAppDispatch } from "../hook/redux"
import { pushEntity, pushMap, pushObject } from "@/store/session-store"

export const initPushDataToSession = (type: 'object' | 'entity' | 'map') => {
    const dispath = useAppDispatch()

    if (type == 'entity') {
        const push = (data: entityInterface) => {
            dispath(pushEntity(data))
        }

        return push
    }

    if (type == 'object') {
        const push = (data: objectInterface) => {
            dispath(pushObject(data))
        }

        return push
    }

    if (type == 'map') {
        const push = (data: mapInterface) => {
            dispath(pushMap(data))
        }

        return push
    }

    const push = () => { }
    return push
}