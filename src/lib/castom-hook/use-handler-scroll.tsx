import React from "react";
import { useBoolean, useThrottleFunction } from ".";

export const useHandlerScroll = (daley: number = 100, direction: 'top' | 'bottom' = 'top') => {
    const { on, off, boolean } = useBoolean(false);
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController
    const fn = useThrottleFunction(() => {
        const nodeHandler = refHandler.current

        if (nodeHandler) {

            (direction == 'top' && nodeHandler.getBoundingClientRect()[direction] < window.innerHeight + daley)
                ||
                (direction == "bottom" && nodeHandler.getBoundingClientRect()[direction] > daley) ?
                on()
                :
                off()
        }
    }, 30)

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
