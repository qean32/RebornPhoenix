import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { ModalCross, PlusButton } from '@component/ui'
import * as ModalGroup from './index-group'
import { InStoreMapItem, SelectMapItem } from '@component/ui/item'
import { PushMap } from '@/component/case/push-to-session'
import { useAppDispatch, useAppSelector } from '@/lib/castom-hook/redux'
import { swapCurrentMap } from '@/store/session-store'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const MapsGame: React.FC<Props> = ({ view, swap }: Props) => {
    const { session: { maps, currentMap } } = useAppSelector(state => state.session)
    const dispath = useAppDispatch()
    const swapHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispath(swapCurrentMap({ id: getHTMLData(e, true)?.id }))
    }

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color w-6/12 h-6/12 p-5 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <p className='pl-5 pt-2 text-2xl'>Карты</p>
                <div className='grid gap-5 p-5 grid-cols-6 adaptive2k-grid-column-7' onClick={swapHandler}>
                    {maps.map((item) =>
                        // @ts-ignore
                        <SelectMapItem value={currentMap ? currentMap.id : 'null'} data={item} path={item.path} key={item.id} />
                    )}
                    <ModalGroup.Root modal={ModalGroup.PushToSession} props={{ type: 'map', renderItem: InStoreMapItem, accept: PushMap }}>
                        <PlusButton className='h-[9vh] w-1/9 px-5' iconSize='icon-sm' /></ModalGroup.Root>
                </div>
            </div>
        </Modal>
    )
}
