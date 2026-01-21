import React from 'react'
import { stopPropagation } from '@/lib/function'
import { ModalCross } from '@component/ui'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Notes: React.FC<Props> = ({ swap }: Props) => {
    return (
        <div className="relative bg-color w-8/12 h-9/12 px-4 pt-4 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <p className='text-xl pb-4 pl-0.5'>Заметки</p>
            <textarea placeholder="Ваши заметки" className="bg-color-dark rounded-sm p-2 px-3 flex-1"></textarea>
        </div>
    )
}
