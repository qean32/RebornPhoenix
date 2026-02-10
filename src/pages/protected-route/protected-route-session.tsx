import React from 'react'
import { ViewSession } from '../'
import { MainLoader } from '@/component/shared'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteSession: React.FC<Props> = ({ children }: Props) => {
    if (false) {
        return <>
            <MainLoader />
            <ViewSession />
        </>
    }

    return (
        <>
            {children}
        </>
    )
}
