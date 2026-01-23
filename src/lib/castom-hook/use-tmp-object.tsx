import { useAppDispatch } from "@/store"
import { useAppSelector } from "./redux"
import { clearTmpObject, key, state, swapTmpObject } from "@/store/tmp-object"

export const useTmpObject = (): {
    tmpObject: state
    key: key
    setTmp: (data: { key: key, payload: state }) => void,
    clearTmp: () => void
} => {
    const dispath = useAppDispatch()
    const { tmpObject, key } = useAppSelector(state => state.tmpObject)

    const clearTmp = () => {
        dispath(clearTmpObject())
    }

    const setTmp = (data: { key: key, payload: state }) => {
        dispath(swapTmpObject(data))
    }

    return { tmpObject, key, setTmp, clearTmp }
}