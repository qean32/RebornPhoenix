import React from 'react'
import { stopPropagation } from '@/lib/function'
import { ModalCross } from '@component/ui'
import { FilterPushToSession, GroupTokenInModal } from '@component/shared'
import { useStore } from '@/lib/castom-hook'
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
    const [primeList, loading] = useStore(type)

    return (
        <div className="relative bg-color w-9/12 h-10/12 rounded-md flex overflow-hidden" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <div className="w-9/12 h-full overflow-scroll relative">
                <FilterPushToSession type={type} />
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

