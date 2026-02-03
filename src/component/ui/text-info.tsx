import React from 'react'
import { cn } from '@lib/function'
import { developers } from '@/export'

interface Props {
    className?: string
    title: string
}


export const TextInfo: React.FC<Props> = ({
    className,
    title
}: Props) => {
    return (
        <div className={cn("pt-5 pb-3", className)}>
            <p className="text-5xl">D&D Belive {title}</p>
            <div className="line mt-3"></div>
            <p className="text-xl mt-3 pb-5">{developers}</p>
        </div>
    )
}
