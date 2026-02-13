import React from "react"
import { initThrowEvent } from "../function"
import { useAppSelector } from "../hook/redux"
import { eventType } from "@/model"


export const EventMiddleware = (force?: boolean) => {
    const throwEvent = initThrowEvent()
    const { isDevMode } = useAppSelector(state => state.log)

    const returnedFunction = React.useCallback(
        (payload: eventType, action: () => void) => {
            if (!isDevMode || force) {
                throwEvent(payload)
            }

            action()
        }, [isDevMode])

    return returnedFunction
}