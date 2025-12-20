import { useToast } from "../castom-hook"

export const initFunctionRoll = () => {
    const toast = useToast()
    const roll = () => {
        toast('message', { text: 'Успытываем вашу удачу...' })
        // toast('message', { text: 'ВАМ ВЫПАЛО 20!' })
    }

    return roll
}