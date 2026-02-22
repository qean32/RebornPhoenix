import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpObject, keysTmp, state, swapTmpObject } from "@/store/tmp-object-store"

export const useTmpObject = (): {
    tmpObject: state
    key: keysTmp
    setTmp: (data: { key: keysTmp, payload: state }) => void,
    clearTmp: () => void
} => {
    const dispath = useAppDispatch()
    const { tmpObject, key } = useAppSelector(state => state.tmpObject)

    const clearTmp = () => {
        dispath(clearTmpObject())
    }

    const setTmp = (data: { key: keysTmp, payload: state }) => {
        dispath(swapTmpObject(data))
    }

    return { tmpObject, key, setTmp, clearTmp }
}