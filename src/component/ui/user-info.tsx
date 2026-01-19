import React from 'react'
import { Ava, BanAction, BanPlate } from '.'
import { userDto } from '@/model'

interface Props {
    className?: string
    user: Omit<userDto, 'email'>
}


export const UserInfo: React.FC<Props> = ({ user }: Props) => {
    if (user)
        return (
            <>
                <div className='flex gap-6 mt-4'>
                    <Ava size="ava-lg" path={user && user.ava} className="bg-color-dark" />
                    <BanPlate ban={user && (user.ban ?? false)} />
                    <p className="text-3xl">{user && user.name}</p>
                </div>
                <BanAction ban={user.ban ?? false} />
            </>
        )
}
