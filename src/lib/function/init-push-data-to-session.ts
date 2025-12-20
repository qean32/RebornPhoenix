import { entityDto, mapDto, objectDto } from "@/model"
import { useAppDispatch } from "../castom-hook/redux"
import { pushEntity, pushMap, pushObject } from "@/store/session-store"
import { useToast } from "../castom-hook"

export const initPushDataToSession = (type: 'object' | 'entity' | 'map') => {
    const dispath = useAppDispatch()

    if (type == 'entity') {
        const toast = useToast()
        const push = (data: entityDto) => {
            dispath(pushEntity(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'object') {
        const toast = useToast()

        const push = (data: objectDto) => {
            dispath(pushObject(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    if (type == 'map') {
        const toast = useToast()

        const push = (data: mapDto) => {
            dispath(pushMap(data))
            toast('push-entity', { name: data.name })
        }

        return push
    }

    const push = () => { }
    return push
}