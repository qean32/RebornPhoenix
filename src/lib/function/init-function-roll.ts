import { rollText } from "@/config"
import { useThrottleFunction, useToast } from "../hook"
import { EventMiddleware } from "../middleware"
import { getBetweenNumber } from "./get-between-number"


export const initFunctionRoll = (force?: boolean) => {
    const toast = useToast()
    const event = EventMiddleware(force)

    const roll = useThrottleFunction(
        () => {
            toast('message', { text: 'Успытываем вашу удачу...' })
            const payload = { roll: getBetweenNumber(1, 20) }

            setTimeout(() => {
                event({ payload, type: 'dice' },
                    () => toast('message', { text: `${rollText[getBetweenNumber(0, rollText.length - 1)]} ${payload.roll}!` }, 1000))
            }, 600)
        }, 2000)

    return roll
}