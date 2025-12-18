import React from 'react'
import { Ava } from '@component/ui'
import { Link } from 'react-router-dom'
import { userDto } from '@/model'

interface Props extends userDto {
}


export const PostInfo: React.FC<Props> = ({ ava, name, id }: Props) => {
    return (
        <div className="flex items-end gap-2 py-3 pt-4">
            <Link to={`/profile/${id}/${name}`}>
                <Ava size="ava-sm" path={ava ?? "/img/auth.jpg"} />
            </Link>
            <Link to={`/profile/${id}/${name}`}>
                <p className='ml-2'>zxccursed</p>
            </Link>
            <p>20.05.2002</p>
            <p># 764</p>
        </div>
    )
}
