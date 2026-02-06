import React from "react";

export function useDebounce<T>(defaultValue: T, daley: number = 400) {
    const [debounsedValue, setDebousedValue] = React.useState<T>(defaultValue)

    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebousedValue(defaultValue)
        }, daley)

        return () => clearTimeout(timeOut)
    }, [defaultValue, daley])

    return debounsedValue
}