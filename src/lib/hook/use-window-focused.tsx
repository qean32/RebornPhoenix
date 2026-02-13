import React from "react"
import { useBoolean } from "./use-boolean"

export const useWindowFocused = () => {
    const { boolean, off, on } = useBoolean()

    React.useEffect(() => {
        window.addEventListener('focus', on)
        window.addEventListener('blur', off)

        return () => {
            window.removeEventListener('focus', on)
            window.removeEventListener('blur', off)
        }
    }, [])

    return boolean
}