import React from "react"

type voidFn = () => void
export const useBoolean = (initialValue: boolean = false): { boolean: boolean, swap: voidFn, on: voidFn, off: voidFn } => {
    const [boolean, setBoolean] = React.useState<boolean>(initialValue)

    const swap = React.useCallback(() => {
        setBoolean((prev: boolean) => !prev)
    }, [])

    const on = React.useCallback(() => setBoolean(true), [])
    const off = React.useCallback(() => setBoolean(false), [])

    return { boolean, swap, on, off }
}

export type TypeUseBoolen = ReturnType<typeof useBoolean>
