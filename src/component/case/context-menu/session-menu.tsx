import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { Modal } from '../modal'
import { AccessAction } from '../modal/access-action-modal'
import { ContextMenuItem } from './context-menu-item'

interface Props {
}


export const SessionMenu: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="absolute right-2 z-50" onClick={stopPropagation}>
            <ContextMenu>
                <Modal.Root modal={AccessAction} props={{ fn: () => console.log('zxc'), warning: "Вы собираетесь удалить сессию?", warningButtonText: 'Удалить сессию' }}>
                    <ContextMenuItem fn={() => { }}>Удалить</ContextMenuItem>
                </Modal.Root>
            </ContextMenu>
        </div>
    )
}
