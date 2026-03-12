import React from 'react'
import { cn } from '@lib/function'
import { Button } from '@component/ui'
import { SwithLeftSideSession } from './swith-tool-session'
import { SortableItem, DragHandle, UnwrapArray, UnwrapSortableArray } from './utils'
import { InToolEntityItem, InToolObjectItem, InToolCharacterItem } from '@component/ui/item'
import { useAppDispatch, useAppSelector } from '@/lib/hook/redux'
import { nextQueue, prevQueue } from '@/store/session'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
}


export const SharedVariant: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData, characters }, bestiary } = useAppSelector(state => state.session)
    const [content] = useContentThrow()

    if (!currentMap || currentMap.id == null) {
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
        <SwithLeftSideSession />
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
                    items={mapsData[currentMap.id]?.queue}
                    title='ОЧЕРЕДЬ'
                />
                <UnwrapArray
                    renderItem={InToolEntityItem}
                    items={bestiary}
                    title='БЕСТИАРИЙ'
                />
                <UnwrapArray
                    renderItem={InToolObjectItem}
                    items={mapsData[currentMap.id]?.objects}
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
