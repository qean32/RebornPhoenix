import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { objectInterface } from '@/model'
import { useAppDispatch } from '@/lib/hook/redux'
import { scaleObject, removeObject, changeObject, pushObject } from '@/store/session-store'
import { EventMiddleware } from '@/lib/middleware'

interface Props extends objectInterface {
}


export const ObjectMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const event = EventMiddleware()

    const removeHandler = () => dispath(removeObject({ id: item.id }))
    const scaleHandler = (operation: -1 | 1) => {
        const payload = { object: item, operation }
        event({ payload, type: 'change-object' }, () => { dispath(scaleObject({ ...payload })) })
    }
    const swapHidden = () => {
        const payload = { id: item.id, status: (item.status == '' ? 'hidden' : '') }
        event({ payload, type: 'change-object' }, () => { dispath(changeObject({ payload })) })
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
