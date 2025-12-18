import React from 'react'
import { cn } from '@lib/function'
import { Ava, BanAction, BanPlate } from '.'

interface Props {
    className?: string
}


export const UserInfo: React.FC<Props> = ({ className }: Props) => {
    return (
        <>
            <div className={cn('flex gap-6 mt-4', className)}>
                <Ava size="ava-lg" path="" className="bg-color-dark" />
                <BanPlate ban />
                <p className="text-3xl">NICKNAME</p>
            </div>
            <BanAction />
        </>
    )
}
