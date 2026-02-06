import React from "react"
import { useQuery } from "react-query"

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
    const [response, setData] = React.useState<T>()
    const RQData = useQuery(RQkey, fetch_, { keepPreviousData: true, refetchOnWindowFocus: false, suspense: config.suspense })

    React.useEffect(() => {
        RQData.data &&
            // @ts-ignore
            setData(RQData.data)
    }, [RQData.data])

    if (config.editable) {
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