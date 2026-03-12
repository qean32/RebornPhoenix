import React from 'react'
import { cn } from '@lib/function'

interface Props {
    path: string
    isActive: boolean
    className: string
}


export const SelectImgItem: React.FC<Props> = ({ path, isActive, className }: Props) => {
    return (
        <div
            value={path}
            className={cn(
                'bg-img bg-shadow rounded-sm overflow-hidden cursor-pointer hover:border-1',
                className,
                (isActive && 'border-1')
            )}
            style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${path}`})` }}>
        </div>
    )
}
