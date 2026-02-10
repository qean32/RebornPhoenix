import { nameProject } from '@/export'
import React from 'react'
import { Logo } from '../ui'

interface Props {
}


export const PhoneWarning: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex gap-5 justify-center items-center flex-col py-10">
            <Logo size='icon-3xl' />
            <p>платформа работает только с пк-устройств</p>
            <p className='text-sm -translate-y-1/2'>{nameProject}</p>
        </div>
    )
}
