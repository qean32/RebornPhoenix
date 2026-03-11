import React from "react"
import { useQuery } from "@tanstack/react-query"
import { requestEditableFn } from "@/model"

export function useRequestEditable<T>(
    fetch_: any,
    RQkey: string[]
): [T, boolean, requestEditableFn] {
    const [response, setData] = React.useState<T[]>([])
    const RQData = useQuery<T[]>({
        queryKey: RQkey,
        queryFn: fetch_,
    })

    React.useEffect(() => {
        RQData.data &&
            setData(RQData.data)
    }, [RQData.data])

    const pushItem = React.useCallback((data: T) => {
        setData(prev => [data, ...prev])
    }, [])
    const updateItem = React.useCallback((data: T) => {
        setData(prev => {
            if (prev) {
                // @ts-ignore
                const index = prev.findIndex(item => item.id == data.id)
                return [...prev.slice(index + 1, prev.length).reverse(), data, ...prev.slice(0, index)].reverse()
            }

            return prev
        })
    }, [])
    const deleteItem = React.useCallback((data: T) => {
        // @ts-ignore
        setData(prev => prev.filter(item => item.id != data.id))
    }, [])

    // @ts-ignore
    return [response, RQData.isLoading, { pushItem, updateItem, deleteItem }]
}
