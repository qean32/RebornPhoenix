import { useToast } from "../hook"
import { EventMiddleware } from "../middleware"
import { getBetweenNumber } from "./get-between-number"

export const initFunctionRoll = () => {
    const toast = useToast()
    const event = EventMiddleware()

    const roll = () => {
        toast('message', { text: 'Успытываем вашу удачу...' })
        const payload = { roll: getBetweenNumber(1, 20) }

        setTimeout(() => {
            event({ payload, type: 'dice' }, () => toast('message', { text: `вам выпало ${payload.roll}!` }, 1000))
        }, 600)
    }

    return roll
}