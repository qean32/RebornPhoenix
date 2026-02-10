import { entityInterface, mapInterface, objectInterface } from "@/model"
import { useAppDispatch } from "../hook/redux"
import { pushEntity, pushMap, pushObject } from "@/store/session-store"
import { useToast } from "../hook"

export const initPushDataToSession = (type: 'object' | 'entity' | 'map') => {
    const dispath = useAppDispatch()
    const toast = useToast()

    if (type == 'entity') {
        const push = (data: entityInterface) => {
            dispath(pushEntity(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'object') {
        const push = (data: objectInterface) => {
            dispath(pushObject(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'map') {
        const push = (data: mapInterface) => {
            dispath(pushMap(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    const push = () => { }
    return push
}