import React from "react"
import { useQuery } from "react-query"

export function useRequest<T,>(fetch_: any, RQkey: string[], editable: boolean = false): [T, boolean, Function, Function, Function] {
    const [response, setData] = React.useState<T>()
    const RQData = useQuery(RQkey, fetch_, { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        RQData.data &&
            // @ts-ignore
            setData(RQData.data)
    }, [RQData.data])

    if (editable) {
        const push = (data: T) => {
            // @ts-ignore
            setData(prev => [data, ...prev])
        }
        const update = (data: T) => {
            // @ts-ignore
            setData(prev => [data, ...prev.filter(item => item.id != data.id)])
        }
        const _delete = (data: T) => {
            // @ts-ignore
            setData(prev => prev.filter(item => item.id != data.id))
        }

        //@ts-ignore
        return [response, RQData.isLoading, push, _delete, update]
    }

    //@ts-ignore
    return [response, RQData.isLoading]
}