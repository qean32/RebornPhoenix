import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/hook/redux'
import { removeEntity } from '@/store/session-store'
import { entityInterface } from '@/model'
import { Initiative } from '@/component/ui'
import { swapTmpObject } from '@/store/tmp-object-store'
import { useQ } from '@/lib/hook'
import { qpk } from '@/export'

interface Props extends entityInterface {
}


export const EntityMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeEntity({ id: item.id }))
    const { pushQ } = useQ(qpk.actionentity)
    const moreHandler = () => dispath(swapTmpObject({ payload: { id: item.idInBestiary }, key: 'more-entity' }))
    const actionHandler = () => { pushQ(item.id.toString()) }

    return (
        <ContextMenu className='z-20'>
            <Initiative title={30} className='mx-3 mb-3' />
            <ContextMenuItem fn={actionHandler}>Действия</ContextMenuItem>
            <ContextMenuItem fn={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={moreHandler}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
