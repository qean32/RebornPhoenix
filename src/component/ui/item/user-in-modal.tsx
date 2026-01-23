import React from 'react'
import { Ava } from '../'
import { userDto } from '@/model'

interface Props extends userDto {
}


export const UserInModal: React.FC<Props> = ({ ava, name, id }: Props) => {
    return (
        <div
            className="flex px-4 py-2 gap-5 bg-color-dark-hover items-center transition-300 bg-color cursor-pointer child-no-fill-event pointer-events-auto"
            data={JSON.stringify({ id })}>
            <Ava path={ava ?? ''} className='bg-color-darkness' size='ava-md' />
            <p>{name ? name : 'Zxccursed'}</p>
        </div>
    )
}
