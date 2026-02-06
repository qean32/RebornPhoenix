import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { objectDto } from '@/model'
import { useAppDispatch } from '@/lib/hook/redux'
import { scaleObject, removeObject, changeObject, pushObject } from '@/store/session-store'

interface Props extends objectDto {
}


export const ObjectMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const removeHandler = () => dispath(removeObject({ id: item.id }))
    const scaleHandler = (operation: -1 | 1) => dispath(scaleObject({ object: item, operation }))
    const swapHidden = () => {
        dispath(changeObject({ payload: { id: item.id, status: (item.status == '' ? 'hidden' : '') } }))
    }
    const push = () => {
        dispath(pushObject({ ...item }))
    }

    return (
        <ContextMenu>
            <ContextMenuItem fn={() => scaleHandler(1)}>Изм. размер</ContextMenuItem>
            <ContextMenuItem fn={swapHidden}>Изм. видимость</ContextMenuItem>
            <ContextMenuItem fn={removeHandler}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={push}>Дублировать</ContextMenuItem>
        </ContextMenu>
    )
}
