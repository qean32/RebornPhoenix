import React from "react"
import { initThrowEvent } from "../function"
import { useAppSelector } from "../hook/redux"
import { eventType } from "@/model"


export const EventMiddleware = (force?: boolean) => {
    const throwEvent = initThrowEvent()
    const { mode } = useAppSelector(state => state.log)

    const returnedFunction = React.useCallback(
        (payload: eventType, action: () => void) => {
            if (mode == 'play' || force) {
                throwEvent(payload)
            }

            action()
        }, [mode])

    return returnedFunction
}
