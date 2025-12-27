import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpObject } from "@/store/tmp-object"

export const useObjectMoreDetailed = () => {
    const dispath = useAppDispatch()
    const { tmpObject, key } = useAppSelector(state => state.tmpObject)

    const clearTmp = () => {
        dispath(clearTmpObject())
    }

    return { tmpObject, clearTmp, key }
}