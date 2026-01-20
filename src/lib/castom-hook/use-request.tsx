import React from "react"
import { useQuery } from "react-query"

export function useRequest<T>(fetch_: any, RQkey: string[]): [T, boolean, React.Dispatch<React.SetStateAction<T>>] {
    const [response, setData] = React.useState<T>()
    const RQData = useQuery(RQkey, fetch_, { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        RQData.data &&
            // @ts-ignore
            setData(RQData.data)
    }, [RQData.data])

    //@ts-ignore
    return [response, RQData.isLoading, setData]
}