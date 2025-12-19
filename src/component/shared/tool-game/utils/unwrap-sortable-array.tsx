import React from 'react'
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import type { Active } from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import { SortableOverlay } from '.';
import { useAppDispatch, useAppSelector } from '@/lib/castom-hook/redux';
import { changeQueue } from '@/store/session-store';

interface Props {
    items: any[]
    renderItem(item: any): React.ReactNode
    title: string
}


export function UnwrapSortableArray({
    items,
    title,
    renderItem
}: Props) {
    const dispath = useAppDispatch()
    const { tmpObject } = useAppSelector(state => state.tempEntity)
    const onChange = (array: any[]) => {
        dispath(changeQueue({ queue: array }))
    }
    const [active, setActive] = React.useState<Active | null>(null);
    const activeItem = React.useMemo(
        () => items.find((item) => item.id === active?.id),
        [active, items]
    );
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    return (
        <>

            <div className='w-1/4'>
                <p className='pl-3 pb-2'>{title}</p>
                <DndContext
                    sensors={sensors}
                    onDragStart={({ active }) => {
                        setActive(active);
                    }}
                    onDragEnd={({ active, over }) => {
                        if (over && active.id !== over?.id) {
                            const activeIndex = items.findIndex(({ id }) => id === active.id);
                            const overIndex = items.findIndex(({ id }) => id === over.id);

                            onChange(arrayMove(items, activeIndex, overIndex));
                        }
                        setActive(null);
                    }}
                    onDragCancel={() => {
                        setActive(null);
                    }}
                >
                    <SortableContext items={items}>
                        <div className='h-full pt-2 pb-2 max-h-full overflow-scroll'>
                            {items.map(item => {
                                return <React.Fragment key={item.id}>{renderItem({ ...item, selectId: tmpObject?.id })}</React.Fragment>
                            })}
                        </div>
                    </SortableContext>
                    <SortableOverlay>
                        {activeItem ? renderItem(activeItem) : null}
                    </SortableOverlay>
                </DndContext>
            </div>
        </>
    )
}
