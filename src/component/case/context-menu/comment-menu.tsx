import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/hook/redux'
import { commentDto } from '@/model'
import { swapTmpObject } from '@/store/tmp-object'
import { forumService } from '@/service'
import { useToast } from '@/lib/hook'
import { REJECT_SERVER } from '@/export'

interface Props extends commentDto {
}

const ACCEESS_ACTION = 'Комментарий удален'
export const CommentMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const toast = useToast()
    const remove = () => {
        dispath(swapTmpObject({ key: 'delete-comment', payload: item }))
        forumService.DELETE_COMMENT(item.id)
            .then(({ status }) => {
                if (status == 200) {
                    toast('message', { text: ACCEESS_ACTION })
                }
            })
            .catch(() => toast('message', { text: REJECT_SERVER }))
    }
    const update = () => {
        dispath(swapTmpObject({ payload: item, key: 'update-comment' }))
    }

    return (
        <ContextMenu className='z-20'>
            <ContextMenuItem fn={remove}>Удалить</ContextMenuItem>
            <ContextMenuItem fn={update}>Изменить</ContextMenuItem>
        </ContextMenu>
    )
}
