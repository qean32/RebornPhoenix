import React from 'react'
import { stopPropagation } from '@/lib/function'
import { ModalCross } from '@component/ui'
import { FilterPushToSession, GroupTokenInModal } from '@component/shared'
import { useQueryParam, useRequest } from '@/lib/castom-hook'
import { sessionService } from '@/service/session-service'
import { entityDto, mapDto, objectDto } from '@/model'
import { qParamName } from '@/export'
import { useTmpObject } from '@/lib/castom-hook/'
import { ShopSceleton } from '../sceleton'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    renderItem(item: any): React.ReactNode
    accept: any
    type: 'map' | 'entity' | 'object'
}


export const PushToSession: React.FC<Props> = ({
    swap,
    renderItem,
    type,
    accept: Accept
}: Props) => {
    const [primeList, setPrimeList] = React.useState({})
    const [memoryList, setMemoryList] = React.useState({})
    const { tmpObject, key } = useTmpObject()
    const { allQ } = useQueryParam('')

    React.useEffect(() => {
        if (allQ[qParamName.search]) {
            setPrimeList(prev => {
                return Object.fromEntries(
                    Object.entries(prev).map(item => {
                        return [
                            item[0],
                            // @ts-ignore
                            item[1].filter(item =>
                                item.name.includes(allQ[qParamName.search]))]
                    })
                )
            })
        } else {
            setPrimeList(memoryList)
        }
    }, [allQ[qParamName.search]])

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
    const [data, loading] = type == 'entity' ? useRequest<entityDto[]>(() => sessionService.GET_ENTITIES(), [`entities`])
        : type == 'map' ? useRequest<mapDto[]>(() => sessionService.GET_MAPS(), [`maps`])
            :
            useRequest<objectDto[]>(() => sessionService.GET_OBJECTS(), [`objects`])

    React.useEffect(() => {
        const fn = () => {
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
        }
        fn()
    }, [data])

    return (
        <div className="relative bg-color w-9/12 h-10/12 rounded-md flex overflow-hidden" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <div className="w-9/12 h-full overflow-scroll relative">
                <FilterPushToSession />
                {!!loading && <ShopSceleton />}
                {
                    Object.values(primeList).map((item: any) => {
                        return <GroupTokenInModal
                            key={item.id}
                            items={item}
                            renderItem={renderItem}
                        />
                    })
                }
            </div>
            <Accept swap={swap}
            />
        </div>
    )
}

