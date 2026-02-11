import React from 'react'
import { PhoneWarning } from '@/component/master'

interface Props {
    children: React.ReactNode
}


export const ProtectedRoutePhoneWarning: React.FC<Props> = ({ children }: Props) => {
    if (window.innerWidth < 941) {
        return <PhoneWarning />
    }

    return (
        <>
            {children}
        </>
    )
}
