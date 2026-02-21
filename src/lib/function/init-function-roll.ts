import { rollText } from "@/config"
import { useThrottleFunction, useToast, useUser } from "../hook"
import { EventMiddleware } from "../middleware"
import { getBetweenNumber } from "./get-between-number"


export const initFunctionRoll = (force?: boolean) => {
    const toast = useToast()
    const event = EventMiddleware(force)
    const { user } = useUser()

    const roll = useThrottleFunction(
        () => {
            toast('message', { text: 'Успытываем вашу удачу...' })
            const text = `${rollText[getBetweenNumber(0, rollText.length - 1)]} ${getBetweenNumber(1, 20)}! ${user?.name}`

            setTimeout(() => {
                event({ payload: { roll: text }, type: 'dice' },
                    () => toast('message', { text }, 3000))
            }, 600)
        }, 2000)

    return roll
}