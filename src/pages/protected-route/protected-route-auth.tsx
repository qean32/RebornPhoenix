import React from 'react'
import { useUser } from '@/lib/hook'
import { NoAuth } from '../no-auth'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteAuth: React.FC<Props> = ({ children }: Props) => {
    const { user } = useUser()

    if (!user?.id) {
        return <NoAuth />
    }

    return (
        <>
            {children}
        </>
    )
}
