import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'
import { useToast } from '@/lib/castom-hook'
import { forumService } from '@/service'
import { sessionDto } from '@/model'

interface Props extends sessionDto {
}

const ACCEESS_ACTION = 'Сессия удален'
export const SessionMenu: React.FC<Props> = (item: Props) => {
    const toast = useToast()
    const remove = () => {
        forumService.deleteComment(item.id)
            // @ts-ignore
            .then(({ code }) => {
                if (code == 200) {
                    toast('message', { text: ACCEESS_ACTION })
                }
            })
            .catch(error => toast('message', { text: error }))
    }

    return (
        <div className="absolute right-2 z-50" onClick={stopPropagation}>
            <ContextMenu>
                <Modal.Root modal={AccessAction} props={{ fn: remove, warning: "Вы собираетесь удалить сессию?", warningButtonText: 'Удалить сессию' }}>
                    <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
                </Modal.Root>
            </ContextMenu>
        </div>
    )
}
