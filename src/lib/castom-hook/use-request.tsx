import React from "react"
import { useQuery } from "react-query"

export function useRequest<T>(fetch_: any, RQkey: string[]) {
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery(RQkey, fetch_, { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        RQData.data &&
            Array.isArray(RQData.data) &&
            setFinalData(RQData.data)
    }, [RQData.data])

    // @ts-ignore
    return { finaldata, setFinalData, loading: RQData.isLoading }
}