import React from "react"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"

// soo no cool
export function useRequest<T,>(
    fetch_: any,
    RQkey: string[],
    config: {
        editable?: boolean,
        suspense?: boolean
    } = {
            editable: false,
            suspense: false
        }
): [T, boolean, Function, Function, Function] {
    const [response, setData] = React.useState<T | null>(null)
    const RQData = config.suspense ? useSuspenseQuery({
        queryKey: RQkey,
        queryFn: fetch_,
    }) : useQuery<T>({
        queryKey: RQkey,
        queryFn: fetch_,
    })

    React.useEffect(() => {
        RQData.data &&
            // @ts-ignore
            setData(RQData.data)
    }, [RQData.data])

    if (config.editable) {
        const push = React.useCallback((data: T) => {
            // @ts-ignore
            setData(prev => [data, ...prev])
        }, [])
        const update = React.useCallback((data: T) => {
            // @ts-ignore
            setData(prev => {
                if (prev) {
                    // @ts-ignore
                    const index = prev.findIndex(item => item.id == data.id)
                    // @ts-ignore
                    return [...prev.slice(index + 1, prev.length).reverse(), data, ...prev.slice(0, index)].reverse()
                }
            })
        }, [])
        const _delete = React.useCallback((data: T) => {
            // @ts-ignore
            setData(prev => prev.filter(item => item.id != data.id))
        }, [])

        //@ts-ignore
        return [response, RQData.isLoading, push, _delete, update]
    }

    //@ts-ignore
    return [response, RQData.isLoading]
}
