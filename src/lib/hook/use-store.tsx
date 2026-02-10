import { qpk } from "@/export"
import { entityInterface, mapInterface, objectInterface } from "@/model"
import { sessionService } from "@/service/session-service"
import React from "react"
import { useQ } from "./use-q"
import { useRequest } from "./use-request"
import { useTmpObject } from "./use-tmp-object"

export const useStore = (type: string) => {
    const [primeList, setPrimeList] = React.useState({})
    const [memoryList, setMemoryList] = React.useState({})
    const { tmpObject, key } = useTmpObject()
    const { allQ } = useQ(qpk.search)

    React.useEffect(() => {
        if (allQ[qpk.search]) {
            setPrimeList(prev => {
                return Object.fromEntries(
                    Object.entries(prev).map(item => {
                        return [
                            item[0],
                            // @ts-ignore
                            item[1].filter(item =>
                                item.name.includes(allQ[qpk.search]))]
                    })
                )
            })
        } else {
            setPrimeList(memoryList)
        }
    }, [allQ[qpk.search]])

    React.useEffect(() => {
        setPrimeList(memoryList)
        if (allQ['select'] && allQ['select'] != '0') {
            setPrimeList(prev => {
                return Object.fromEntries(
                    // @ts-ignore
                    Object.entries(prev).filter(item => item[1][0].source.id == allQ['select'])
                )
            })
        } else if (allQ['select'] == '0') {
            setPrimeList(memoryList)
        }
    }, [allQ['select']])

    React.useEffect(() => {
        if (key == 'push-entity') {

            setPrimeList(prev => {
                return {
                    // @ts-ignore
                    ...prev, [tmpObject.source.name]: [
                        // @ts-ignore
                        ...prev[tmpObject.source.name] ?? [],
                        tmpObject
                    ]
                }
            })
        }
    }, [key, tmpObject])

    const [data, loading] = type == 'entity' ? useRequest<entityInterface[]>(() => sessionService.GET_ENTITIES(), [`entities`])
        : type == 'map' ? useRequest<mapInterface[]>(() => sessionService.GET_MAPS(), [`maps`])
            :
            useRequest<objectInterface[]>(() => sessionService.GET_OBJECTS(), [`objects`])

    const init = React.useCallback(() => {
        const tmp = {}
        data?.forEach(item => {
            // @ts-ignore
            tmp[item.source.name] = [
                // @ts-ignore
                ...tmp[item.source.name] ?? [],
                item
            ]
        })
        setMemoryList(tmp)
        setPrimeList(tmp)
    }, [data])

    React.useEffect(() => {
        init()
    }, [data])

    return [primeList, loading]
}