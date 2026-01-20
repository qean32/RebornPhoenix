import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { ModalCross } from '@component/ui'
import { FilterPushToSession, GroupTokenInModal } from '@component/shared'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    renderItem(item: any): React.ReactNode
    accept: any
    type: 'map' | 'entity' | 'object'
}


export const PushToSession: React.FC<Props> = ({
    view,
    swap,
    renderItem,
    type,
    accept: Accept
}: Props) => {
    let primeItems = {};
    const data = type == 'entity' ? [] : type == 'map' ? [] : []
    data.forEach(item => {
        // @ts-ignore
        primeItems[item.source.name] = [
            // @ts-ignore
            ...primeItems[item.source.name] ?? [],
            item
        ]
    })

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
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
        </Modal>
    )
}
