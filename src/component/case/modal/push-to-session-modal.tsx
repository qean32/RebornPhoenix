import React from 'react'
import { stopPropagation } from '@/lib/function'
import { ModalCross } from '@component/ui'
import { FilterPushToSession, GroupTokenInModal } from '@component/shared'
import { useRequest } from '@/lib/castom-hook'
import { sessionService } from '@/service/session-service'
import { entityDto, mapDto, objectDto } from '@/model'

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
    let primeItems = {};
    const [data] = type == 'entity' ? useRequest<entityDto[]>(() => sessionService.getEntities(), [`entities`])
        : type == 'map' ? useRequest<mapDto[]>(() => sessionService.getMaps(), [`maps`])
            :
            useRequest<objectDto[]>(() => sessionService.getObjects(), [`objects`])
    data?.forEach(item => {
        // @ts-ignore
        primeItems[item.source.name] = [
            // @ts-ignore
            ...primeItems[item.source.name] ?? [],
            item
        ]
    })

    return (
        <div className="relative bg-color w-9/12 h-10/12 rounded-md flex overflow-hidden" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <div className="w-9/12 h-full overflow-scroll relative">
                <FilterPushToSession />
                {
                    Object.values(primeItems).map((item: any) => {
                        return <GroupTokenInModal key={item.id} items={item} renderItem={renderItem} />
                    })
                }
            </div>
            <Accept swap={swap}
            />
        </div>
    )
}

