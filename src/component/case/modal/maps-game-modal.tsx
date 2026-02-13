import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { ModalCross, PlusButton } from '@component/ui'
import * as ModalGroup from './index-group'
import { InStoreMapItem, SelectMapItem } from '@component/ui/item'
import { PushMap } from '@/component/case/push-to-session'
import { useAppDispatch, useAppSelector } from '@/lib/hook/redux'
import { swapCurrentMap } from '@/store/session-store'
import { modalAnimationEnum } from '@/config'
import { EventMiddleware } from '@/lib/middleware'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const MapsGame: React.FC<Props> = ({ swap }: Props) => {
    const { session: { maps, currentMap } } = useAppSelector(state => state.session)
    const dispath = useAppDispatch()
    const event = EventMiddleware()
    const swapHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const payload = { id: getHTMLData(e, true)?.id };

        event({ payload, type: 'swap-map' }, () => {
            dispath(swapCurrentMap(payload))
        })
    }

    return (
        <div className="relative bg-color w-6/12 h-6/12 p-5 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <p className='pl-5 pt-2 text-2xl'>Карты</p>
            <div className='grid gap-5 p-5 grid-cols-6 adaptive2k-grid-column-7' onClick={swapHandler}>

                {!!maps?.length
                    && maps.map((item) =>
                        <SelectMapItem
                            value={currentMap ? currentMap.id : 'null'}
                            data={item}
                            path={item.path}
                            key={item.id}
                            name={item.name}
                        />
                    )}

                <ModalGroup.Root
                    modal={ModalGroup.PushToSession}
                    props={{ type: 'map', renderItem: InStoreMapItem, accept: PushMap }}
                    animation={modalAnimationEnum['modal-dft']}
                >
                    <PlusButton className='h-[9vh] w-1/9 px-5 mt-7' iconSize='icon-sm' /></ModalGroup.Root>
            </div>
        </div>
    )
}
