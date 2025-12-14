import React from 'react'
import { cn } from '@lib/function'
import { useBoolean } from '@lib/castom-hook'
import { useAppSelector } from '@lib/castom-hook/redux'
import { SharedVariant, ShortVariant } from '.'
import { Arrow } from './utils'

interface Props {
    className?: string
}


export const ToolGame: React.FC<Props> = ({ className }: Props) => {
    const { boolean, swap } = useBoolean(false)
    const { session: { currentMap, mapsData, characters }, bestiary } = useAppSelector(state => state.session)

    return (
        <div className={cn('fixed z-10 w-[20%] h-[100%] bg-color-dark transition-700 pt-14 pb-3 flex flex-col', (!boolean && 'w-[55px]'), className)}>
            {boolean && <Arrow swap={swap} />}
            {boolean && <SharedVariant
                bestiary={bestiary}
                id={currentMap ? currentMap.id : null}
                characters={characters}
                mapsData={mapsData} />}
            {!boolean && <ShortVariant swap={swap} />}
        </div>
    )
}
