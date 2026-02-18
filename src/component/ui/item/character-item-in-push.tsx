import { characterInterface } from '@/model/entities.interfaces'
import React from 'react'

interface Props extends characterInterface {
}


export const CharacterItemInPush: React.FC<Props> = ({
    name,
    path,
}: Props) => {
    return (
        <div data={JSON.stringify({ name, path })}
            className='prime-hover relative child-no-fill-event overflow-hidden rounded-sm running-line-parent h-[100px] cursor-pointer bg-color-dark-hover transition-300 bg-img hover:-translate-y-2'>
            <div className="bg-shadow-prime absolute inset-0 bg-img z-10" style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${path})` }}></div>
            <div className='py-3 items-center justify-end flex absolute inset-0 flex-col gap-2 h-[100px] z-20'>
                <p className='text-sm w-9/12 overflow-hidden mb-1 text-center'>{name.split(' ')[0]}</p>
            </div>
        </div>
    )
}
