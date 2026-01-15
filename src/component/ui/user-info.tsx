import React from 'react'
import { cn } from '@lib/function'
import { Ava, BanAction, BanPlate } from '.'
import { userDto } from '@/model'

interface Props {
    className?: string
    user: Omit<userDto, 'email'>
}


export const UserInfo: React.FC<Props> = ({ className, user }: Props) => {
    return (
        <>
            <div className={cn('flex gap-6 mt-4', className)}>
                <Ava size="ava-lg" path={user && user.ava} className="bg-color-dark" />
                <BanPlate ban={user && (user.ban ?? false)} />
                <p className="text-3xl">{user && user.name}</p>
            </div>
            <BanAction />
        </>
    )
}
