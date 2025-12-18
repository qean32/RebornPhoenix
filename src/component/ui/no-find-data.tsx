import React from 'react'
import { cn, getBetweenNumber } from '../../lib/function'
import { noFindDataIcon } from '@/export'

interface Props {
    className?: string
    title: string
    view: boolean
}

export const NoFindData: React.FC<Props> = ({
    className,
    title,
    view
}: Props) => {
    if (!view) {
        return null
    }
    const ref = React.useRef(noFindDataIcon[getBetweenNumber(0, noFindDataIcon.length - 1)])

    return (
        <div className={cn("flex-1 flex justify-center items-center flex-col gap-8", className)}>
            <img src={ref.current} className='icon-4xl' />
            <p className='text-sm'>{title}</p>
        </div>
    )
}
