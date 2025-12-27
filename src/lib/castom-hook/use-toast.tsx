import { toastKeyDto, toastPayloadDto } from "@/model"
import { useAppDispatch } from "./redux"
import { pushToast, removeToast } from "@/store/toast-store"
import { generateId } from "../function"

export const useToast = () => {
    const dispath = useAppDispatch()
    const toast = (key: toastKeyDto, payload?: toastPayloadDto, timeout: number = 1000) => {
        const id = generateId()
        dispath(pushToast({ key, payload: payload ?? {}, id }))

        setTimeout(() => {
            dispath(removeToast({ id }))
        }, timeout)
    }

    return toast
}