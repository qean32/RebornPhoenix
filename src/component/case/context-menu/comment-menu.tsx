import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { commentDto } from '@/model'
import { swapTmpObject } from '@/store/temp-entity'

interface Props extends commentDto {
}


export const CommentMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const remove = () => {
    }
    const update = () => {
        dispath(swapTmpObject({ ...item, isComment: true }))
    }

    return (
        <ContextMenu className='z-20'>
            <ContextMenuItem fn={remove}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={update}>Изменить</ContextMenuItem>
        </ContextMenu>
    )
}
