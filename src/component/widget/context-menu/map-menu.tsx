import React from 'react'
import { ContextMenu } from '@/component/master/hoc'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/hook/redux'
import { removeMap } from '@/store/session'
import { mapInterface } from '@/model'

interface Props extends mapInterface {
}


export const MapMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const remove = () => {
        dispath(removeMap({ id: item.id }))
    }
    return (
        <ContextMenu className='z-20'>
            <ContextMenuItem onClick={remove}>Удалить</ContextMenuItem>
        </ContextMenu>
    )
}
