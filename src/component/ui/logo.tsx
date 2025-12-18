import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    variant?: "default" | "short" | "horizontal"
    size?: 'icon-sm' | 'icon-md' | 'icon-lg' | 'icon-2xl' | 'icon-3xl'
}

const map = {
    default: '/icon/logo.svg',
    short: '/icon/logo-short.svg',
    horizontal: '',
}


export const Logo: React.FC<Props> = ({
    className,
    size = 'icon-md',
    variant = 'default'
}: Props) => {
    return (
        <img src={map[variant]} alt="" className={cn('', className, size)} />
    )
}
