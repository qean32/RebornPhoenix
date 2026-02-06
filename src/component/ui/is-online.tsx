import React from 'react'
import { useOnline } from '@/lib/hook'
import { cn } from '@/lib/function'

interface Props {
}


export const IsOnline: React.FC<Props> = ({ }: Props) => {
    const online = useOnline()

    return (
        <div className={cn("w-[12px] aspect-square rounded-full", (online ? "" : "bg-amber-700"))}></div>
    )
}
