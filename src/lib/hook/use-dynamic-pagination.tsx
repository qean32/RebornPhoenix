import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useBoolean, useHandlerScroll } from "."
import { useSearchThrow, useFilterThrow } from "./throw"

export const useDynamicPagination = <T,>(
    fetch_: Function,
    RQkey: string[],
    _skip: number,
    _take: number,
    staticParam: string[]
) => {
    const [search] = useSearchThrow()
    const [{ date, tags }] = useFilterThrow()
    const filters = [date, tags]

    const { refHandler, boolean } = useHandlerScroll()
    const [skip, setSkip] = React.useState<number>(0)
    const [response, setResponse] = React.useState<T[]>([])

    const { boolean: isEnd, on: onIsEnd, off: offIsEnd } = useBoolean()
    const { boolean: loading, off: offLoading, on: onLoading } = useBoolean(true)

    const RQData = useQuery({
        queryKey: [
            `${RQkey[0]}-${skip}`,
            skip, search, filters
        ],
        queryFn: () => fetch_(skip, _take, search, ...staticParam, ...filters),
    })

    React.useEffect(() => {
        offIsEnd()
        onLoading()
        setSkip(0)
        setResponse([]);
    }, [search, ...filters])

    React.useEffect(() => {
        if (RQData.data && Array.isArray(RQData.data.data)) {
            setResponse(prev => [...prev, ...RQData.data.data])
            offLoading()
            RQData.data.isEnd && onIsEnd()
        }
    }, [RQData.data])

    React.useEffect(() => {
        if (boolean && !isEnd) {
            setTimeout(() => setSkip((prev) => prev + _take), 600)
        }
    }, [boolean])

    return { response, refHandler, loading, isEnd }
}
