import React from "react"
import { useQuery } from "react-query"
import { useBoolean, useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0, take: number, search: string) => {
    const { refHandler, boolean } = useHandlerScroll()

    const [skip, setSkip] = React.useState<number>(skip_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const { boolean: isEnd, on: onIsEnd } = useBoolean()
    const { boolean: loading, off } = useBoolean(true)
    const RQData = useQuery([...RQkey, skip, search], () => fetch_(skip, take, search), { keepPreviousData: false, refetchOnWindowFocus: false })

    React.useEffect(() => {
        search ? setSkip(0) : setFinalData([])
    }, [search])

    React.useEffect(() => {
        if (
            RQData.data
            && Array.isArray(RQData.data.data)
        ) {
            if (search) {
                setFinalData((prev: T[]) => [...prev, ...RQData.data.data])
            } else {
                setFinalData(RQData.data.data)
            }
            RQData.data.isEnd > 40 && onIsEnd()
        }
    }, [RQData.data])

    React.useEffect(() => {
        if (boolean && RQData.data.next && !isEnd) {
            off();
            setTimeout(() =>
                setSkip((prev) => Number(prev) + take)
                , 600)
        }
    }, [boolean])

    return { finaldata, refHandler, loading, isEnd }
}