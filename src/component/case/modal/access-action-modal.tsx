import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Button, ModalCross, NoFindData, Title } from '@component/ui'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    fn: React.MouseEventHandler<HTMLButtonElement>
    warning: string
    warningButtonText: string
}


export const AccessAction: React.FC<Props> = ({
    view,
    swap,
    fn,
    warning,
    warningButtonText
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
            <div className="bg-color w-4/12 h-6/12 pt-5 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <Title className='p-2 pl-5 text-center uppercase letter-spacing-2px'>Подтвердите действие</Title>
                <div className="flex justify-center items-center flex-col flex-1 gap-2">
                    <NoFindData title='' view />
                    <p className='text-2xl pt-4'>{warning}</p>
                </div>
                <div className="flex gap-5 justify-end p-5 items-end h-fit">
                    <Button variant='ghost' fn={(e) => { fn(e); swap(e); }}><p>{warningButtonText}</p></Button>
                    <Button variant='acceess' fn={swap}><p>Отмена</p></Button>
                </div>
            </div>
        </Modal>
    )
}
