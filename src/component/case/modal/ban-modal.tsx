import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { ModalCross, Title } from '@component/ui'
import { BanForm } from '../form'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    id: string
}


export const Ban: React.FC<Props> = ({
    view,
    swap,
    id
}: Props) => {

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-4/12 h-7/12 pt-5 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <Title className='p-2 pl-5 text-center uppercase letter-spacing-2px'>Выдача блокировки</Title>
                <BanForm id={id} swap={swap} />
            </div>
        </Modal>
    )
}
