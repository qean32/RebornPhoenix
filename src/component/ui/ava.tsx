import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
    path: string
    size?: 'ava-sm' | 'ava-md' | 'ava-lg' | 'ava-xl'
    blob?: boolean
}


export const Ava: React.FC<Props> = ({
    className,
    size = 'ava-md',
    path,
    blob
}: Props) => {
    return (
        <div className={cn('z-10 bg-img bg-color cursor-pointer rounded-full', size, className)}
            style={{ backgroundImage: `url(${blob ? path : `${process.env.SERVER_HOST}storage/${path}`})` }} ></div>
    )
}
