import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    fn: React.MouseEventHandler<HTMLParagraphElement>
}


export const ContextMenuItem: React.FC<Props> = ({
    children,
    className,
    fn
}: Props) => {
    return (
        <p
            onClick={fn}
            className={cn('text-nowrap py-2 bg-color-dark-hover px-3 transition-300 text-start', className)}>{children}</p>
    )
}
