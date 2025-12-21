import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpEntity } from "@/store/tmp-entity"

export const useEntityMore = () => {
    const dispath = useAppDispatch()
    const { tmpObject } = useAppSelector(state => state.tmpEntity)

    const clearTmp = () => {
        dispath(clearTmpEntity())
    }

    return { tmpObject, clearTmp }
}