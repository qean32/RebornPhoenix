import React from 'react'

interface Props {
    path: string
    name: string
    number: number
}


export const LinkCharacterItem: React.FC<Props> = ({
    path,
    number,
    name
}: Props) => {
    return (
        <a href={path} target='_blank' className='prime-hover bg-color-dark overflow-hidden rounded-sm running-line-parent h-fit'>
            <div className='py-3 items-center flex flex-col gap-2 h-[100px]'>
                <p className='text-5xl'>{number}</p>
                <p className='text-sm'>{name.split(' ')[0]}</p>
            </div>
        </a>
    )
}
