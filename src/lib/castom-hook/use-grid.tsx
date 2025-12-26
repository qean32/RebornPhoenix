import { useQueryParam } from "./use-query-param"

export const useGrid = () => {
    const { param, pushQ, clearQ } = useQueryParam('grid')

    const swap = () => {
        if (param) {
            clearQ()
            return
        }

        pushQ('view')
    }

    return { param, swap }
}