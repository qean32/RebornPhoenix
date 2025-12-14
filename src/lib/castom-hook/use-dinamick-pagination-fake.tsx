import React from "react"
import { useBoolean, useHandlerScroll } from "."

export const useDinamickPaginationFake = <T,>(skip_: number = 0, search: string, items: T[]) => {
    const { refHandler, boolean } = useHandlerScroll(70)

    const [skip, setSkip] = React.useState<number | string>(skip_)
    const { boolean: isEnd, on: onIsEnd } = useBoolean()
    const [finaldata, setFinalData] = React.useState<any[]>(items)
    const { boolean: loading, off } = useBoolean(true)
    // const RQData = useQuery([...RQkey, skip, search], () => fetch_(skip), { keepPreviousData: false, refetchOnWindowFocus: false })

    React.useEffect(() => {
        // search ? setSkip(0) : setFinalData([])
    }, [search])

    React.useEffect(() => {
        if (
            !isEnd
        ) {
            if (search) {
                setFinalData((prev: T[]) => [...prev, ...prev])
            } else {
                setFinalData((prev: T[]) => [...prev, ...prev])
                if (finaldata.length > 40) {
                    onIsEnd()
                }
            }
        }
    }, [skip])

    React.useEffect(() => {
        if (boolean) {
            off()
            setTimeout(() =>
                setSkip((prev) => Number(prev) + 4)
                , 600)
        }
    }, [boolean])

    return { skip, finaldata, refHandler, setFinalData, loading, isEnd }
}