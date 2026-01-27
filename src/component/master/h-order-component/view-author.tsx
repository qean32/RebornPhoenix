import { useUser } from '@/lib/castom-hook'
import React from 'react'

interface Props {
    children: React.ReactNode
    reverse?: boolean
    payload_id: number | string
}


export const ViewAuthor: React.FC<Props> = ({ children, payload_id, reverse = false }: Props) => {
    const user = useUser()
    if (reverse && payload_id == user?.id && payload_id) {
        return
    }

    if (reverse && payload_id != user?.id && payload_id) {
        return (
            <>
                {children}
            </>
        )
    }

    if (payload_id == user?.id && payload_id) {
        return (
            <>
                {children}
            </>
        )
    }
}
