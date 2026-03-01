import { ContextMenu } from '@/component/master/h-order-component'
import { handleFetchCatch, handleFetchThen, stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'
import { useTmpObject, useToast } from '@/lib/hook'
import { sessionInterface } from '@/model'
import { modalAnimationEnum } from '@/config'
import { sessionService } from '@/service/session-service'

interface Props extends sessionInterface {
}

const ACCEESS_ACTION = 'Сессия удалена'
export const SessionMenu: React.FC<Props> = ({ id }: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const remove = () => {
        sessionService.DELETE_SESSION(id)
            .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, () => {
                setTmp({ key: 'delete-session', payload: { id } })
            }))
            .catch(response => handleFetchCatch(response, toast))
    }

    return (
        <div className="absolute right-2 z-50" onClick={stopPropagation}>
            <ContextMenu>
                <Modal.Root
                    modal={AccessAction}
                    props={{ fn: remove, warning: "Вы собираетесь удалить сессию?", warningButtonText: 'Удалить сессию' }}
                    animation={modalAnimationEnum['modal-dft']}
                >
                    <ContextMenuItem>Удалить</ContextMenuItem>
                </Modal.Root>
            </ContextMenu>
        </div>
    )
}
