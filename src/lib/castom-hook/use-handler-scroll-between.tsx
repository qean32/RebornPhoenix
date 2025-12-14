import React from "react";
import { useBoolean, useThrottleFunction } from ".";

export const useHandlerScrollBetween = (daley: number = -100) => {
    const { on, off, boolean } = useBoolean(false);
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController

    const fn = useThrottleFunction(() => {
        const nodeHandler = refHandler.current
        if (nodeHandler) {
            (window.scrollY + window.innerHeight - daley > nodeHandler.offsetTop - daley
                && window.scrollY + window.innerHeight - daley < nodeHandler.offsetTop + nodeHandler.getBoundingClientRect().height - daley)
                ?
                on()
                :
                off()
        }
    }, 20)

    React.useEffect(() => {
        const nodeHandler = refHandler.current

        if (nodeHandler) {
            window.addEventListener('scroll', fn, { signal: controller.signal })

            return function () {
                controller.abort()
            }
        }
    }, [])

    return { boolean, refHandler }
}
