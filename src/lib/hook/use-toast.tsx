import { toastKeyType, toastPayloadType } from "@/model"
import { useAppDispatch } from "./redux"
import { pushToast, removeToast } from "@/store/toast"
import { generateId } from "../function"

export const useToast = () => {
    const dispath = useAppDispatch()
    const toast = (key: toastKeyType, payload?: toastPayloadType, timeout: number = 1000) => {
        const id = generateId()
        dispath(pushToast({ key, payload: payload ?? {}, id }))

        setTimeout(() => {
            dispath(removeToast({ id }))
        }, timeout)
    }

    return toast
}