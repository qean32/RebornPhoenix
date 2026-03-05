import React from 'react'
import { cn } from '@lib/function'

interface Props extends React.ComponentProps<"button"> {
    className?: string
    children: React.ReactNode
    value?: string
}


export const ButtonInGroup: React.FC<Props> = ({
    className,
    children,
    value,
    onClick
}: Props) => {
    return (
        <button
            value={value ?? ''}
            className={cn("p-3 btn-in-group transition-300 flex justify-center items-center cursor-pointer", className)}
            onClick={onClick}>
            {children}
        </button>
    )
}
