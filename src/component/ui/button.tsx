import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'acceess' | 'reject' | 'ghost' | 'plus' | 'default-no-hover'
    fn?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
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
    fn = () => { },
    type = 'button'
}: Props) => {
    return (
        <button
            onClick={fn}
            value={'button'}
            type={type}
            className={cn(
                'transition-300 rounded-md cursor-pointer px-2 py-2',
                className,
                map.get(variant)
            )}>
            {children}
        </button>
    )
}
