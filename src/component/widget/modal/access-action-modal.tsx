import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Button, ModalCross, NoFindData, Title } from '@component/ui'

interface Props extends React.ComponentProps<"button"> {
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
    warning: string
    warningButtonText: string
}


export const AccessAction: React.FC<Props> = ({
    swap,
    onClick,
    warning,
    warningButtonText
}: Props) => {

    return (
        <div className="bg-color w-4/12 h-6/12 pt-5 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
            <ModalCross onClick={swap} />
            <Title className='p-2 pl-5 text-center uppercase letter-spacing-2px'>Подтвердите действие</Title>
            <div className="flex justify-center items-center flex-col flex-1 gap-2">
                <NoFindData title='' />
                <p className='text-2xl pt-4'>{warning}</p>
            </div>
            <div className="flex gap-5 justify-end p-5 items-end h-fit">
                {/* @ts-ignore */}
                <Button variant='ghost' onClick={(e) => { onClick(e); swap(e); }}><p value='modal'>{warningButtonText}</p></Button>
                <Button variant='acceess' onClick={swap}><p value='modal'>Отмена</p></Button>
            </div>
        </div>
    )
}
