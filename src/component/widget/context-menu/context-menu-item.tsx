import React from 'react'
import { cn } from '@lib/function'

interface Props extends React.ComponentProps<"p"> {
    className?: string
    children: React.ReactNode
}


export const ContextMenuItem: React.FC<Props> = ({
    children,
    className,
    onClick
}: Props) => {
    return (
        <p onClick={onClick}
            className={cn('text-nowrap py-2 bg-color-dark-hover px-3 transition-300 text-start', className)}>{children}</p>
    )
}
