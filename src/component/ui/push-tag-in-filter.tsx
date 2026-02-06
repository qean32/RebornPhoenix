import React from 'react'
import { useBoolean, useQ } from '@/lib/hook'
import { cn } from '@/lib/function'
import { UnwrapTags } from '@component/ui'
import { qpk, tagsArray } from '@/export'

interface Props {
    className?: string
}


export const PushTagInFilter: React.FC<Props> = ({
    className,
}: Props) => {
    const { param: tags, pushQ } = useQ(qpk.tags)
    const { boolean: view, swap } = useBoolean()

    const clickHandlerPush = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        if (!tags.includes(tag))
            pushQ(tags + tag + ',')
        swap()
    }

    const clickHandlerRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const newTags = tags.split(',').slice(0, -1).filter(item => item != e.target.innerHTML).join(',')
        pushQ(`${newTags}${!!newTags.length ? ',' : ''}`);
    }

    return (
        <div className={cn('flex w-full flex-col gap-2 cursor-pointer relative', className)}>
            <div onClick={swap} className='w-fit'>Теги</div>

            <div
                className={cn("pointer-events-none transition-300 origin-top", (!!tags.length ? 'h-[50px]' : 'opacity-0 scale-y-0 h-[0px]'))}
                onClick={clickHandlerRemove}
            ><UnwrapTags
                    className='z-50 bg-color-dark px-2'
                    tags={tags} /></div>
            {
                view &&
                <div className="pointer-events-none absolute bottom-0 translate-y-[120%]" onClick={clickHandlerPush}>
                    <UnwrapTags className='z-50 bg-color-darkness px-2' tags={tagsArray.join(',')} />
                </div>
            }
        </div>
    )
}
