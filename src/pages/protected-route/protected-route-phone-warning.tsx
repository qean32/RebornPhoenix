import React from 'react'
import { PhoneWarning } from '@/component/shared'
import { expansionPhone } from '@/config'

interface Props {
    children: React.ReactNode
}


export const ProtectedRoutePhoneWarning: React.FC<Props> = ({ children }: Props) => {
    if (
        window.innerWidth < expansionPhone
        // || navigator.maxTouchPoints > 0
        || 'orientation' in window
    ) {
        return <PhoneWarning />
    }

    return (
        <>
            {children}
        </>
    )
}
