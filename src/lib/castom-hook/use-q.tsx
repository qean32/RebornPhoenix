import React from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { keys, pushQuery, clearQuery } from "@/store/q-store";

export const useQ = (key: keys = 'grid', defaultValue?: string) => {
    const { q } = useAppSelector(state => state.q)
    const dispath = useAppDispatch()

    React.useEffect(() => {
        if (defaultValue && !q[key])
            pushQ(defaultValue)
    }, [])

    const pushQ = (value: string) => {
        dispath(pushQuery({ key, value }))
    }

    const clearQParam = (key: keys) => {
        dispath(pushQuery({ key, value: '' }))
    }

    const pushQParam = (key: keys, value: string) => {
        dispath(pushQuery({ key, value }))
    }

    const clearQ = () => {
        dispath(clearQuery())
    }

    return { param: q[key] ?? '', pushQ, clearQ, allQ: q, clearQParam, pushQParam }
}