import React from "react"
import { useQuery } from "react-query"
import { useBoolean, useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0, take: number, search: string, staticParam: any[]) => {
    const { refHandler, boolean } = useHandlerScroll()
    const [skip, setSkip] = React.useState<number>(skip_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const { boolean: isEnd, on: onIsEnd, off: offIsEnd } = useBoolean()
    const { boolean: loading, off, on } = useBoolean(true)
    const RQData = useQuery([...RQkey, skip, search, staticParam], () => fetch_(skip, take, search, ...staticParam), { keepPreviousData: false, refetchOnWindowFocus: false })

    React.useEffect(() => {
        on()
        offIsEnd()
        setSkip(0)
        setFinalData([])
    }, [search])

    React.useEffect(() => {
        if (
            RQData.data
            && Array.isArray(RQData.data.data)
        ) {
            setFinalData((prev: T[]) => [...prev, ...RQData.data.data])
            RQData.data.isEnd && onIsEnd()
            off();
        }
    }, [RQData.data])

    React.useEffect(() => {
        if (boolean && !isEnd) {
            setTimeout(() =>
                setSkip((prev) => Number(prev) + take)
                , 600)
        }
    }, [boolean])

    return { finaldata, refHandler, loading, isEnd }
}