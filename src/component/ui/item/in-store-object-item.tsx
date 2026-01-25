import React from 'react'
import { objectDto } from '@/model'

export const InStoreObjectItem: React.FC<objectDto> = (item: objectDto) => {
    return (
        <div
            className="flex gap-4 mount-opacity h-[10vh] m-1 p-2 cursor-pointer bg-color-dark-hover transition-300 rounded-sm hover-hide-img child-no-fill-event"
            data={JSON.stringify({ ...item, isObject: true, position: { x: 0, y: 0 }, path: `${process.env.SERVER_HOST_STORAGE}${item.path}` })}
        >
            <div className="h-full w-1/2 bg-img bg-shadow transition-300 rounded-sm" style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${item.path})` }}></div>
            <p className='unwrap-text w-1/2 h-full overflow-hidden text-ellipsis rounded-sm'>{item.name}</p>
        </div>
    )
}
