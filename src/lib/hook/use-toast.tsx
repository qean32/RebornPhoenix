import { toastKeyType, toastPayloadType } from "@/model"
import { useAppDispatch } from "./redux"
import { pushToast, removeToast } from "@/store/toast-store"
import { generateId } from "../function"
import React from "react"

export const useToast = () => {
    const dispath = useAppDispatch()
    const toast = React.useCallback((key: toastKeyType, payload?: toastPayloadType, timeout: number = 1000) => {
        const id = generateId()
        dispath(pushToast({ key, payload: payload ?? {}, id }))

        setTimeout(() => {
            dispath(removeToast({ id }))
        }, timeout)
    }, [])

    return toast
}