import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/hook/redux'
import { removeEntity } from '@/store/session'
import { entityInterface } from '@/model'
import { Initiative } from '@/component/ui'
import { swapTmpObject } from '@/store/tmp-object'
import { useEntityActionThrow } from '@/lib/hook/throw'

interface Props extends entityInterface {
}


export const EntityMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeEntity({ id: item.id }))
    const [_, swap] = useEntityActionThrow()
    const moreHandler = () => dispath(swapTmpObject({ payload: { id: item.idInBestiary }, key: 'more-entity' }))
    const actionHandler = () => { swap(item.id) }

    return (
        <ContextMenu className='z-20'>
            <Initiative title={30} className='mx-3 mb-3' />
            <ContextMenuItem onClick={actionHandler}>Действия</ContextMenuItem>
            <ContextMenuItem onClick={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem onClick={moreHandler}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
