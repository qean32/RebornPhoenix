import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const GroupButton: React.FC<Props> = ({
    className,
    children
}: Props) => {
    return (
        <div className={cn('flex rounded-b-sm bg-color-dark fit-content children-no-outline-hover', className)}>
            {children}
        </div>
    )
}
