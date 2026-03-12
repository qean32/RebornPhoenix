import { useEffect } from "react"
import { useBoolean } from "./use-boolean"

export const useMount = (view: boolean, daley: number = 300) => {
    const { boolean: mount, off, on } = useBoolean(false)

    useEffect(() => {
        if (view && !mount) {
            on()
        } else if (!view && mount) {
            setTimeout(off, daley)
        }
    }, [view])

    return mount
}