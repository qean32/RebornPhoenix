import React from 'react'
import { cn } from '@lib/function'
import { Button } from '@component/ui'
import { SwithContentLiftSideGame } from './swith-content-tool-in-game'
import { SortableItem, DragHandle, UnwrapArray, UnwrapSortableArray } from './utils'
import { bestiaryItemInterface, mapsDataInterface, characterInterface } from '@/model'
import { InToolEntityItem, InToolObjectItem, InToolCharacterItem } from '@component/ui/item'
import { useAppDispatch } from '@/lib/hook/redux'
import { nextQueue, prevQueue } from '@/store/session'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
    mapsData: mapsDataInterface
    characters: characterInterface[]
    bestiary: bestiaryItemInterface[]
    id: number | null
}


export const SharedVariant: React.FC<Props> = ({
    mapsData,
    characters,
    bestiary,
    id
}: Props) => {
    const [content] = useContentThrow()

    if (id == null) {
        return <></>
    }
    const dispath = useAppDispatch()
    const next = () => {
        dispath(nextQueue())
    }
    const prev = () => {
        dispath(prevQueue())
    }

    return (<>
        <SwithContentLiftSideGame />
        <div className="h-full w-full overflow-hidden">
            <div className={
                cn("flex h-full w-[400%] transition-700",
                    (content == 'queue' && ''),
                    (content == 'bestiary' && '-translate-x-1/4'),
                    (content == 'objects' && '-translate-x-2/4'),
                    (content == 'characters' && '-translate-x-3/4'),
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
        {(content == 'queue' || !content) &&
            <div className='flex justify-center px-4 bg-color-dark pt-5 gap-3 mb-3'>
                <Button onClick={prev} className='w-full py-2.5'>Назад</Button>
                <Button onClick={next} className='w-full py-2.5'>Вперед</Button>
            </div>}
    </>
    )
}
