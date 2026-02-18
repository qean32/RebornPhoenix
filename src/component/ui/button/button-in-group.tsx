import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    fn?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
    value?: string
}


export const ButtonInGroup: React.FC<Props> = ({
    className,
    fn = () => { },
    children,
    value
}: Props) => {
    return (
        <button
            value={value ?? ''}
            className={cn("p-3 btn-in-group transition-300 flex justify-center items-center cursor-pointer", className)}
            onClick={fn}>
            {children}
        </button>
    )
}
