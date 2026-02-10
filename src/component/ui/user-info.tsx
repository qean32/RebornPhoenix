import React from 'react'
import { Ava, BanPlate } from '.'
import { userInterface } from '@/model'
import { ProfileInfoSceleton } from '../case/sceleton'

interface Props {
    className?: string
    user: Omit<userInterface, 'email'>
}


export const UserInfo: React.FC<Props> = React.memo(({ user }: Props) => {
    if (user?.id) {

        return (
            <>
                <div className='flex gap-6 mt-4'>
                    <Ava size="ava-lg" path={user && user.ava} className="bg-color-dark" />
                    <BanPlate ban={user && (user.ban ?? false)} />
                    <p className="text-3xl">{user && user.name}</p>
                </div>
            </>
        )
    }

    return <ProfileInfoSceleton />
})
