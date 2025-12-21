import { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type {
    DraggableSyntheticListeners,
    UniqueIdentifier
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EntityMenu } from "@/component/case/context-menu";
import { Ava } from "@/component/ui";
import { entityDto } from "@/model";
import { cn } from "@/lib/function";

interface Props {
    id: UniqueIdentifier;
    item: extandEntityDto
}

interface extandEntityDto extends entityDto {
    selectId: number
}

interface Context {
    attributes: Record<string, any>;
    listeners: DraggableSyntheticListeners;
    ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
    attributes: {},
    listeners: undefined,
    ref() { }
});

export function SortableItem({ children, id, item }: PropsWithChildren<Props>) {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable({ id });
    const context = useMemo(
        () => ({
            attributes,
            listeners,
            ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    );
    const style: CSSProperties = {
        opacity: isDragging ? 0.6 : undefined,
        transform: CSS.Translate.toString(transform),
        transition
    };

    return (
        <SortableItemContext.Provider value={context}>
            <div
                className={cn('flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-300 mount-opacity', (item.selectId == item.id && 'border-1'))}
                style={{ 'position': 'relative', ...style }}
                ref={setNodeRef}
            >
                <div className="flex gap-2 flex-1 justify-between">
                    <div className="flex gap-2">
                        <Ava path={item.path ?? ''} size='ava-md' />
                        <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{item.name ?? ''}</p>
                    </div>
                    <EntityMenu {...item} />
                </div>
                {children}
            </div >
        </SortableItemContext.Provider >
    );
}

export function DragHandle() {
    const { attributes, listeners, ref } = useContext(SortableItemContext);

    return (
        <div style={{ position: 'absolute', inset: 0, cursor: 'move', zIndex: '10' }}  {...attributes} {...listeners} ref={ref}>
        </div>
    );
}
