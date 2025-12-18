import React from 'react'
import { ViewAdmin } from '../master/h-order-component'
import { Button } from './button'
import { Modal } from '../case/modal'
import { AccessAction } from '../case/modal/access-action-modal'

interface Props {
}


export const BanAction: React.FC<Props> = ({ }: Props) => {
    return (
        <ViewAdmin>
            <div className="flex gap-2">
                <Modal.Root modal={AccessAction} props={{ fn: () => console.log('zxc'), warning: "Вы собираетесь снять блокировку?", warningButtonText: 'Снять блокировку' }}>
                    <Button className='mt-3 w-fit'>Снять блокировку</Button>
                </Modal.Root>
                <Modal.Root modal={Modal.Ban}>
                    <Button className='mt-3 w-fit'>Выдать блокировку</Button>
                </Modal.Root>
            </div>
        </ViewAdmin>
    )
}
