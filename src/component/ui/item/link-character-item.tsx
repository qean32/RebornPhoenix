import { CharacterMenu } from '@/component/case/context-menu'
import React from 'react'

interface Props {
    path: string
    name: string
    id: number
}


export const LinkCharacterItem: React.FC<Props> = ({
    path,
    id,
    name
}: Props) => {
    return (
        <div
            style={{ backgroundImage: `url(${process.env.SERVER_HOST}storage/${path})` }}
            className='bg-img prime-hover bg-color-dark relative rounded-md running-line-parent h-fit bg-color-hover transition-300 cursor-pointer'
        >
            <div className='py-3 items-center flex flex-col gap-2 h-[110px]'>
                <p className='text-5xl'>{id}</p>
                <p className='text-sm w-full overflow-hidden text-center'>{name.split(' ')[0]}</p>
            </div>
            <CharacterMenu id={id} />
        </div>
    )
}
