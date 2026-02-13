import React from "react";
import { useBoolean } from "./";

export const useOnline = () => {
    const { boolean, on, off } = useBoolean(true)
    const controller = new AbortController

    React.useLayoutEffect(() => {
        window.addEventListener('online', () => on(), { signal: controller.signal })
        window.addEventListener('offline', () => off(), { signal: controller.signal })

        return () => {
            controller.abort()
        }
    }, [])

    return boolean
}