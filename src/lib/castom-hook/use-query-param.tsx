import React from "react";
import { useSearchParams } from "react-router-dom"

export const useQueryParam = (key: string, defaultValue?: string) => {
    const [param, setParam] = useSearchParams()
    const searchParams = new URLSearchParams(window.location.search);

    React.useEffect(() => {
        if (defaultValue && !param)
            pushQ(defaultValue)
    }, [])

    const pushQ = (value: string) => {
        setParam({
            ...Object.fromEntries(searchParams),
            [key]: value,
        })
    }

    const clearQParam = (key: string) => {
        setParam({
            ...Object.fromEntries(searchParams),
            [key]: '',
        })
    }

    const pushQParam = (key: string, value: string) => {
        setParam({
            ...Object.fromEntries(searchParams),
            [key]: value,
        })
    }

    const clearQ = () => {
        setParam({})
    }

    return { param: param.get(key) ?? '', pushQ, clearQ, allQ: Object.fromEntries(searchParams), clearQParam, pushQParam }
}