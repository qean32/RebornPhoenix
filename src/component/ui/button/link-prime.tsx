import React from 'react'
import { cn } from '../../../lib/function'
import { Link } from 'react-router-dom'

interface Props {
    className?: string
    children: string
    path: string
}


export const LinkPrime: React.FC<Props> = ({
    className,
    path,
    children
}: Props) => {
    return (
        <Link
            to={path}
            className={cn('pl-1 cursor-pointer', className)}
        >{children}</Link>
    )
}
