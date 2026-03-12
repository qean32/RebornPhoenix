import React from 'react'
import { cn } from '@lib/function'

interface Props extends React.ComponentProps<"button"> {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'acceess' | 'reject' | 'ghost' | 'plus' | 'default-no-hover'
}

const map = new Map([
    ["default", 'bg-color-dark bg-color-darkness-hover'],
    ["default-no-hover", 'bg-color-darkness'],
    ["ghost", 'hover:underline'],
    ["acceess", 'bg-green-800 hover:bg-green-900'],
    ["reject", 'bg-red-800 hover:bg-red-900'],
])


export const Button: React.FC<Props> = ({
    className = 'w-fit',
    children,
    variant = 'default',
    onClick,
    type = 'button',
}: Props) => {
    return (
        <button
            value={'button'}
            type={type}
            onClick={onClick}
            className={cn(
                'transition-300 rounded-md cursor-pointer px-2 py-2',
                className,
                map.get(variant)
            )}>
            {children}
        </button>
    )
}
