import React from "react"
import { useQuery } from "react-query"
import { useBoolean, useHandlerScroll } from "."

export const useDynamickPagination = <T,>(
    fetch_: Function,
    RQkey: string[],
    skip_: number = 0,
    take: number,
    search: string,
    staticParam: any[],
    date?: any,
    tags?: any
) => {
    const { refHandler, boolean } = useHandlerScroll()
    const [skip, setSkip] = React.useState<number>(skip_)
    const [response, setResponse] = React.useState<T[]>([])
    const { boolean: isEnd, on: onIsEnd, off: offIsEnd } = useBoolean()
    const { boolean: loading, off, on } = useBoolean(true)
    const RQData = useQuery([...RQkey, skip, search, date, tags],
        () => fetch_(skip, take, search, ...staticParam, date, tags), { keepPreviousData: false, refetchOnWindowFocus: false, suspense: true })

    React.useEffect(() => {
        offIsEnd()
        on()
        setSkip(0)
        setResponse([])
    }, [search, date, tags])

    React.useEffect(() => {
        if (
            RQData.data
            && Array.isArray(RQData.data.data)
        ) {
            setResponse((prev: T[]) => [...prev, ...RQData.data.data])
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

    return { response, refHandler, loading, isEnd }
}