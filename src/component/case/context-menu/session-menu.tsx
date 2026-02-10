import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'
import { useTmpObject, useToast } from '@/lib/hook'
import { sessionInterface } from '@/model'
import { modalAnimationEnum, REJECT_SERVER } from '@/export'
import { sessionService } from '@/service/session-service'

interface Props extends sessionInterface {
}

const ACCEESS_ACTION = 'Сессия удалена'
export const SessionMenu: React.FC<Props> = (item: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const remove = () => {
        sessionService.DELETE_SESSION(item.id)
            .then(({ status, data }) => {
                if (status == 200) {
                    toast('message', { text: ACCEESS_ACTION })
                    // @ts-ignore
                    setTmp({ key: 'delete-session', payload: data })
                }
            })
            .catch(() => toast('message', { text: REJECT_SERVER }))
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
