import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpEntity } from "@/store/temp-entity"

export const useEntityMore = () => {
    const dispath = useAppDispatch()
    const { tmpEntity } = useAppSelector(state => state.tempEntity)

    const clearTmp = () => {
        dispath(clearTmpEntity())
    }

    return { tmpEntity, clearTmp }
}