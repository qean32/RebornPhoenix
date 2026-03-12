import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const Title: React.FC<Props> = React.memo(({
    className,
    children
}: Props) => {
    return (
        <p className={cn('text-3xl pl-0.5 mt-2', className)}>
            {children}
        </p>
    )
})
