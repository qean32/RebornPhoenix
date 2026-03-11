import React from 'react'
import { cn } from '@lib/function'
import { useBoolean } from '@lib/hook'
import { SharedVariant, ShortVariant } from '.'
import { Arrow } from './utils'

interface Props {
    className?: string
}


export const ToolSession: React.FC<Props> = ({ className }: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <div className={cn('fixed z-10 w-[20%] h-[100%] bg-color-dark transition-700 pt-14 flex flex-col', (!boolean && 'w-[55px]'), className)}>
            {boolean && <>
                <Arrow swap={swap} />
                <SharedVariant />
            </>}
            {!boolean && <ShortVariant swap={swap} />}
        </div>
    )
}
