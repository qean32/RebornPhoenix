import React from 'react'
import { Button } from '..'
import { cn } from '@lib/function'

interface Props {
    className?: string
    iconSize?: 'icon-sm-' | 'icon-sm' | 'icon-md' | 'icon-lg'
    fn?: React.MouseEventHandler<HTMLButtonElement>
}


export const PlusButton: React.FC<Props> = ({
    className,
    iconSize = 'icon-sm-',
    fn = () => { }
}: Props) => {
    return (
        <Button variant='ghost' className={cn('w-full flex justify-center items-center opacity-75 border-dashed border-2 hover:opacity-60', className)} onClick={fn}>
            <img src="/icon/plus.svg" className={iconSize} alt="" /></Button>
    )
}
