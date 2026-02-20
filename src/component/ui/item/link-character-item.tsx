import { CharacterMenu } from '@/component/case/context-menu'
import { ViewAuthor } from '@/component/master/h-order-component'
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
            style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${path})` }}
            className='bg-img prime-hover bg-color-dark relative rounded-md running-line-parent h-fit bg-color-hover transition-300 cursor-pointer'
        >
            <div className='py-3 items-center justify-end flex flex-col gap-2 h-[110px]'>
                <p className='text-sm w-full overflow-hidden mb-1 text-center'>{name.split(' ')[0]}</p>
            </div>
            <ViewAuthor payload_id={id}>
                <CharacterMenu id={id} />
            </ViewAuthor>
        </div>
    )
}
