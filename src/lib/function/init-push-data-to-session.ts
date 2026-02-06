import { entityDto, mapDto, objectDto } from "@/model"
import { useAppDispatch } from "../hook/redux"
import { pushEntity, pushMap, pushObject } from "@/store/session-store"
import { useToast } from "../hook"

export const initPushDataToSession = (type: 'object' | 'entity' | 'map') => {
    const dispath = useAppDispatch()
    const toast = useToast()

    if (type == 'entity') {
        const push = (data: entityDto) => {
            dispath(pushEntity(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'object') {
        const push = (data: objectDto) => {
            dispath(pushObject(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'map') {
        const push = (data: mapDto) => {
            dispath(pushMap(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    const push = () => { }
    return push
}