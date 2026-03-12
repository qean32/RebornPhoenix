import { entityInterface, gameEntities, mapInterface, objectInterface } from "@/model"
import { sessionService } from "@/service/session-service"
import React from "react"
import { useRequest } from "./use-request"
import { useTmpObject } from "./use-tmp-object"
import { useSearchThrow, useSelectFilterThrow } from "./throw"

const map = new Map<gameEntities, [() => any, gameEntities]>([
    ["entity", [() => sessionService.GET_ENTITIES(), "entity"]],
    ["map", [() => sessionService.GET_MAPS(), "map"]],
    ["object", [() => sessionService.GET_OBJECTS(), "object"]],
])

export const useStore = (type: gameEntities) => {
    const [primeList, setPrimeList] = React.useState({})
    const [memoryList, setMemoryList] = React.useState({})
    const { tmpObject, key } = useTmpObject()
    const [search] = useSearchThrow()
    const [select] = useSelectFilterThrow()

    React.useEffect(() => {
        if (search) {
            setPrimeList(prev => {
                return Object.fromEntries(
                    Object.entries(prev).map(item => {
                        return [
                            item[0],
                            // @ts-ignore
                            item[1].filter(item =>
                                item.name.toLowerCase().includes(search.toLowerCase()))]
                    })
                )
            })
        } else {
            setPrimeList(memoryList)
        }
    }, [search])

    React.useEffect(() => {
        setPrimeList(memoryList)
        if (select) {
            setPrimeList(prev => {
                return Object.fromEntries(
                    // @ts-ignore
                    Object.entries(prev).filter(item => item[1][0].source.id == select)
                )
            })
        } else if (select == 0) {
            setPrimeList(memoryList)
        }
    }, [select])

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

    // @ts-ignore
    const [data, loading] = useRequest<entityInterface[] | mapInterface[] | objectInterface[]>(map.get(type)[0], [map.get(type)[1]])

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
