import React from 'react'
import { Ava } from '@component/ui'
import { entityInterface } from '@/model'
import { BestiaryMenu } from '@component/case/context-menu'


export const InToolEntityItem: React.FC<entityInterface> = (item: entityInterface) => {
    return (
        <div
            className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-300 mount-opacity'
        >
            <div className="flex gap-2 flex-1 justify-between">
                <div className="flex gap-2">
                    <Ava path={item.path ?? ''} blob size='ava-md' />
                    <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{item.name ?? ''}</p>
                </div>
                <BestiaryMenu {...item} />
            </div>
        </div>
    )
}
