import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useBoolean, useHandlerScroll } from "."

export const useDynamicPagination = <T,>(
    fetch_: Function,
    RQkey: string[],
    skip_: number = 0,
    take: number,
    search: string,
    staticParam: any[],
    date?: string,
    tags?: string
) => {
    const { refHandler, boolean } = useHandlerScroll()
    const [skip, setSkip] = React.useState<number>(skip_)
    const [response, setResponse] = React.useState<T[]>([])
    const { boolean: isEnd, on: onIsEnd, off: offIsEnd } = useBoolean()
    const { boolean: loading, off: offLoading, on: onLoading } = useBoolean(true)

    const RQData = useQuery({
        queryKey: [
            `${RQkey[0]}-${skip}`
            , skip, search, date, tags
        ],
        queryFn: () => fetch_(skip, take, search, ...staticParam, date, tags),
    })

    React.useEffect(() => {
        offIsEnd()
        onLoading()
        setSkip(0)
        setResponse([]);
    }, [search, date, tags])

    React.useEffect(() => {
        if (RQData.data && Array.isArray(RQData.data.data)) {
            setResponse(prev => [...prev, ...RQData.data.data])
            offLoading();
            RQData.data.isEnd && onIsEnd()
        }
    }, [RQData.data])

    React.useEffect(() => {
        if (boolean && !isEnd) {
            setTimeout(() => setSkip((prev) => prev + take), 600)
        }
    }, [boolean])

    return { response, refHandler, loading, isEnd }
}
