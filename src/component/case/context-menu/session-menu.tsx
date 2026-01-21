import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'
import { useToast } from '@/lib/castom-hook'
import { sessionDto } from '@/model'
import { modalAnimationEnum } from '@/export'
import { sessionService } from '@/service/session-service'

interface Props extends sessionDto {
}

const ACCEESS_ACTION = 'Сессия удалена'
export const SessionMenu: React.FC<Props> = (item: Props) => {
    const toast = useToast()
    const remove = () => {
        sessionService.deleteSession(item.id)
            .then(({ status }) => {
                if (status == 200) {
                    toast('message', { text: ACCEESS_ACTION })
                    setTimeout(() => {
                        window.location.reload()
                    }, 600)
                }
            })
            .catch(() => toast('message', { text: "Ошибка!" }))
    }

    return (
        <div className="absolute right-2 z-50" onClick={stopPropagation}>
            <ContextMenu>
                <Modal.Root
                    modal={AccessAction}
                    props={{ fn: remove, warning: "Вы собираетесь удалить сессию?", warningButtonText: 'Удалить сессию' }}
                    animation={modalAnimationEnum['modal-dft']}
                >
                    <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
                </Modal.Root>
            </ContextMenu>
        </div>
    )
}
