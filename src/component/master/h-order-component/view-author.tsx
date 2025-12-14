import React from 'react'

interface Props {
    children: React.ReactNode
    reverse?: boolean
}


export const ViewAuthor: React.FC<Props> = ({ children, reverse = false }: Props) => {
    if (reverse) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <>
            {children}
        </>
    )
}
