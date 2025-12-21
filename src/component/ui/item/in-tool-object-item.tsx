import React from 'react'
import { objectDto } from '@/model'
import { ObjectMenu } from '@component/case/context-menu'


export const InToolObjectItem: React.FC<objectDto> = (item: objectDto) => {
    return (
        <div className='flex items-start justify-between px-3 pr-3 py-4 bg-color-hover transition-300 relative'>
            <div className="flex w-fit gap-2 max-w-10/12">
                <img src={item.path} alt="" className='max-w-1/2' />
                <p>{item.name}</p>
            </div>
            <ObjectMenu {...item} />
        </div>
    )
}
