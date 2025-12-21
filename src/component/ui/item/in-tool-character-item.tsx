import React from 'react'
import { Ava } from '@component/ui'
import { entityDto } from '@/model'
import { EntityMenu } from '@component/case/context-menu'


export const InToolCharacterItem: React.FC<entityDto> = (item: entityDto) => {
    return (
        <div
            className='flex items-center justify-between px-3 pr-3 py-4 bg-color-hover transition-300 relative'
        >
            <div className="flex gap-2 flex-1 justify-between">
                <div className="flex gap-2">
                    <Ava path={item.path} size='ava-md' />
                    <p className='pl-3 flex-1 text-ellipsis overflow-hidden text-nowrap'>{item.name}</p>
                </div>
                <EntityMenu {...item} />
            </div>
        </div>
    )
}
