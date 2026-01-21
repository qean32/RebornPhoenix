import React from 'react'
import { stopPropagation } from '@/lib/function'
import { PushSessionForm } from '@component/case/form'
import { Button, ModalCross } from '@component/ui'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}


export const PushSession: React.FC<Props> = ({ swap }: Props) => {
    return (
        <div className="relative bg-color p-5 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/7" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <PushSessionForm>
                <>
                    <Button variant='ghost' fn={swap}><p>Отмена</p></Button>
                    <Button variant='acceess' type='submit' ><p>Добавить</p></Button></>
            </PushSessionForm>
        </div>
    )
}
