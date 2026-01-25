import React from 'react'
import { cn } from '@lib/function'

interface Props {
    path: string
    value: string
}


export const ViewImgCarouselItem: React.FC<Props> = ({ path, value }: Props) => {
    return (
        <img
            value={`${process.env.SERVER_HOST_STORAGE}${path}`}
            src={`${process.env.SERVER_HOST_STORAGE}${path}`} alt=""
            className={cn('cursor-pointer h-full rounded-sm', (path == value && 'border-1'))} />
    )
}
