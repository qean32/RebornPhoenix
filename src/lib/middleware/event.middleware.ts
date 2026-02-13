import React from "react"
import { initThrowEvent } from "../function"
import { useAppSelector } from "../hook/redux"
import { eventType } from "@/model"


export const EventMiddleware = () => {
    const throwEvent = initThrowEvent()
    const { isDevMode } = useAppSelector(state => state.session)

    const returnedFunction = React.useCallback(
        (payload: eventType, action: () => void) => {
            if (!isDevMode) {
                throwEvent(payload)
            }

            action()
        }, [isDevMode])

    return returnedFunction
}