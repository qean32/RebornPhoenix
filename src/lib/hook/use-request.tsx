import React from "react"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"

export function useRequest<T>(
    fetch_: any,
    RQkey: string[],
    config: {
        suspense: boolean
    } = {
            suspense: true
        }
)
    : [T, boolean] {
    // @ts-ignore
    const [response, setData] = React.useState<T>(null)
    const RQData = config.suspense ? useSuspenseQuery<T>({
        queryKey: RQkey,
        queryFn: fetch_,
        refetchOnMount: true
    }) : useQuery<T>({
        queryKey: RQkey,
        queryFn: fetch_,
        refetchOnMount: true
    })

    React.useEffect(() => {
        if (RQData.data != undefined || RQData.data != null)
            setData(RQData.data)
    }, [RQData.data])

    return [response, RQData.isLoading]
}
