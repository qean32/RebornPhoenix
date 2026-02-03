import { useUser } from '@/lib/castom-hook'
import React from 'react'

interface Props {
    children: React.ReactNode
}


export const ViewAdmin: React.FC<Props> = ({ children }: Props) => {
    const user = useUser()

    if (user?.role == 2) {

        return (
            <div className='w-fit'>
                {children}
            </div>
        )
    }
}
