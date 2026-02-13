import { useCallback, useRef } from 'react'

const DEFAULT_THROTTLE_MS = 400

const getRemainingTime = (lastTriggeredTime: number, daley: number) => {
    const elapsedTime = Date.now() - lastTriggeredTime
    const remainingTime = daley - elapsedTime

    return (remainingTime < 0) ? 0 : remainingTime
}

export const useThrottleFunction = (
    callbackFn: (args: any) => void,
    daley: number = DEFAULT_THROTTLE_MS,
) => {
    const lastTriggered = useRef<number>(Date.now())
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const cancel = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }, [])

    const throttledFn = useCallback(<T,>(args?: T) => {
        let remainingTime = getRemainingTime(lastTriggered.current, daley)

        if (remainingTime === 0) {
            lastTriggered.current = Date.now()
            callbackFn(args)
            cancel()
        } else if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
                remainingTime = getRemainingTime(lastTriggered.current, daley)

                if (remainingTime === 0) {
                    lastTriggered.current = Date.now()
                    callbackFn(args)
                    cancel()
                }
            }, remainingTime)
        }
    }, [callbackFn, cancel])

    return throttledFn
}
