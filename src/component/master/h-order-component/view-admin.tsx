import React from 'react'

interface Props {
    children: React.ReactNode
}


export const ViewAdmin: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className='w-fit'>
            {children}
        </div>
    )
}
