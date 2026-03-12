import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpObject, keysTmp, stateT, swapTmpObject } from "@/store/tmp-object"

export const useTmpObject = (): {
    tmpObject: stateT
    key: keysTmp
    setTmp: (data: { key: keysTmp, payload: stateT }) => void,
    clearTmp: () => void
} => {
    const dispath = useAppDispatch()
    const { tmpObject, key } = useAppSelector(state => state.tmpObject)

    const clearTmp = () => {
        dispath(clearTmpObject())
    }

    const setTmp = (data: { key: keysTmp, payload: stateT }) => {
        dispath(swapTmpObject(data))
    }

    return { tmpObject, key, setTmp, clearTmp }
}