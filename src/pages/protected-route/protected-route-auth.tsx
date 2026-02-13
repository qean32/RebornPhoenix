import React from 'react'
import { useUser } from '@/lib/hook'
import { Auth } from '../auth'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteAuth: React.FC<Props> = ({ children }: Props) => {
    const { user } = useUser()

    if (!user?.id) {
        return <Auth />
    }

    return (
        <>
            {children}
        </>
    )
}
