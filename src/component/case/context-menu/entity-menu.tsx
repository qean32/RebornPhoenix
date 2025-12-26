import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { removeEntity } from '@/store/session-store'
import { entityDto } from '@/model'
import { Initiative } from '@/component/ui'
import { swapTmpObject } from '@/store/tmp-object'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'

interface Props extends entityDto {
}


export const EntityMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeEntity({ id: item.id }))
    const moreHandler = () => dispath(swapTmpObject({ payload: { id: item.idInBestiary }, key: 'more-entity' }))
    const actionHandler = () => { pushQ(item.id.toString()) }
    const { pushQ } = useQueryParam(qParamName.actionEntity)

    return (
        <ContextMenu className='z-20'>
            <Initiative title={30} className='mx-3 mb-3' />
            <ContextMenuItem fn={actionHandler}>Действия</ContextMenuItem>
            <ContextMenuItem fn={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={moreHandler}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
