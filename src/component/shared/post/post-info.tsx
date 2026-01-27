import React from 'react'
import { Ava } from '@component/ui'
import { Link } from 'react-router-dom'
import { userDto } from '@/model'

interface Props {
    user: Omit<userDto, 'email'>,
    id: number
    date: string
}


export const PostInfo: React.FC<Props> = ({ date, id, user }: Props) => {
    if (user)
        return (
            <div className="flex items-end gap-2 py-3 pt-4">
                <Link to={`/profile/${user.id}/${user.name}`}>
                    <Ava size="ava-sm" path={user.ava ?? ""} />
                </Link>
                <Link to={`/profile/${user.id}/${user.name}`}>
                    <p className='ml-2'>{user.name}</p>
                </Link>
                <p>{date}</p>
                <p># {id}</p>
            </div>
        )
}
