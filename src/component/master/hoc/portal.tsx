import React from 'react'
import { createPortal } from 'react-dom'

interface Props {
    children: React.ReactNode
}


export const Portal: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            {createPortal(children, document.body)}
        </>
    )
}
