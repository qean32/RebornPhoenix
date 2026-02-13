import { qpk } from "@/config"
import { useQ } from "./use-q"

export const useGrid = () => {
    const { param, pushQ, clearQ } = useQ(qpk.grid)

    const swap = () => {
        if (param) {
            clearQ()
            return
        }

        pushQ('view')
    }

    return { param, swap }
}