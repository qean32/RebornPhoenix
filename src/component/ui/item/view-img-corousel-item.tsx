import React from 'react'
import { cn } from '@lib/function'

interface Props {
    path: string
    isActive: boolean
}


export const ViewImgCarouselItem: React.FC<Props> = ({ path, isActive }: Props) => {
    return (
        <img
            // ${process.env.SERVER_HOST_STORAGE}
            value={`${path}`}
            src={`${process.env.SERVER_HOST_STORAGE}${path}`} alt=""
            className={cn('cursor-pointer h-full rounded-sm', (isActive && 'border-1'))} />
    )
}
