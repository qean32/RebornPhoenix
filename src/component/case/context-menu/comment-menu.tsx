import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/hook/redux'
import { commentType } from '@/model'
import { swapTmpObject } from '@/store/tmp-object-store'
import { forumService } from '@/service'
import { useToast } from '@/lib/hook'
import { handleFetchCatch, handleFetchThen } from '@/lib/function'

interface Props extends commentType {
}

const ACCEESS_ACTION = 'Комментарий удален'
export const CommentMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const toast = useToast()
    const remove = () => {
        dispath(swapTmpObject({ key: 'delete-comment', payload: item }))
        forumService.DELETE_COMMENT(item.id)
            .then(response => handleFetchThen(response, toast, ACCEESS_ACTION))
            .catch(response => handleFetchCatch(response, toast))
    }
    const update = () => {
        dispath(swapTmpObject({ payload: item, key: 'update-comment' }))
    }

    return (
        <ContextMenu className='z-20'>
            <ContextMenuItem onClick={remove}>Удалить</ContextMenuItem>
            <ContextMenuItem onClick={update}>Изменить</ContextMenuItem>
        </ContextMenu>
    )
}
