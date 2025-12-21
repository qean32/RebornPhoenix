import React from 'react'
import { cn } from '@lib/function'
import { Button } from '@component/ui'
import { SwithContentLiftSideGame } from './swith-content-tool-in-game'
import { SortableItem, DragHandle, UnwrapArray, UnwrapSortableArray } from './utils'
import { bestiaryItem, mapsDataDto, characterDto } from '@/model'
import { InToolEntityItem, InToolObjectItem, InToolCharacterItem } from '@component/ui/item'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { nextQueue } from '@/store/session-store'

interface Props {
    mapsData: mapsDataDto
    characters: characterDto[]
    bestiary: bestiaryItem[]
    id: number | null
}


export const SharedVariant: React.FC<Props> = ({
    mapsData,
    characters,
    bestiary,
    id
}: Props) => {
    const { param } = useQueryParam(qParamName.sContent)
    if (id == null) {
        return <></>
    }
    const dispath = useAppDispatch()
    const next = () => {
        dispath(nextQueue())
    }

    return (<>
        <SwithContentLiftSideGame />
        <div className="h-full w-full overflow-hidden">
            <div
                className={
                    cn("flex h-full w-[400%] transition-700",
                        (param == 'queue' && ''),
                        (param == 'bestiary' && '-translate-x-1/4'),
                        (param == 'objects' && '-translate-x-2/4'),
                        (param == 'characters' && '-translate-x-3/4'),
                    )
                }>
                <UnwrapSortableArray
                    renderItem={(item) => (
                        <SortableItem item={item} id={item.id}>
                            <DragHandle />
                        </SortableItem>
                    )}
                    items={mapsData[id]?.queue}
                    title='ОЧЕРЕДЬ'
                />
                <UnwrapArray
                    renderItem={InToolEntityItem}
                    items={bestiary}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    renderItem={InToolObjectItem}
                    items={mapsData[id]?.objects}
                    title='ОБЬЕКТЫ'
                />
                <UnwrapArray
                    renderItem={InToolCharacterItem}
                    items={characters}
                    title='ПЕРСОНАЖИ'
                />
            </div >
        </div>
        {(param == 'queue' || !param) &&
            <div className='flex justify-center px-4 bg-color-dark pt-5'>
                <Button variant='acceess' fn={next} className='w-full py-2.5'>Cледующий</Button>
            </div>}
    </>
    )
}
