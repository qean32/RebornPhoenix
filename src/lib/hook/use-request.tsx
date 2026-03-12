import React from "react"
import { useSuspenseQuery } from "@tanstack/react-query"

export function useRequest<T>(
    fetch_: any,
    RQkey: string[])
    : [T, boolean] {
    // @ts-ignore
    const [response, setData] = React.useState<T>(null)
    const RQData = useSuspenseQuery<T>({
        queryKey: RQkey,
        queryFn: fetch_,
    })

    React.useEffect(() => {
        RQData.data &&
            setData(RQData.data)
    }, [RQData.data])

    return [response, RQData.isLoading]
}
