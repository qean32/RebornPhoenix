import React from 'react'
import { stopPropagation } from '@/lib/function'
import { PushCharaterForm } from '@component/case/form'
import { Button, ModalCross } from '@component/ui'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const PushCharacterInProfile: React.FC<Props> = ({ swap }: Props) => {
    return (
        <div className="relative bg-color p-5 w-3/12 px-7 h-6/12 rounded-md flex flex-col -translate-y-1/8" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <PushCharaterForm swap={swap}>
                <><Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='acceess' type='submit' ><p>Добавить</p></Button></>
            </PushCharaterForm>
        </div>
    )
}