import React from 'react'
import { entityInterface } from '@/model'

export const InStoreEntityItem: React.FC<entityInterface> = (item: entityInterface) => {
    return (
        <div
            className="px-4 py-4 flex gap-5 bg-color bg-color-dark-hover transition-300 rounded-md cursor-pointer hover-hide-img child-no-fill-event"
            data={JSON.stringify({ ...item, isEntity: true, position: { y: 0, x: 0 }, path: `${process.env.SERVER_HOST_STORAGE}${item.path}` })}
        >
            <div className="w-[60px] aspect-square h-fit bg-img transition-300 rounded-full" style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${item.path})` }}></div>
            <div className='w-1/2 hover-w-full h-fit'>
                <p className='text-2xl unwrap-text w-full overflow-hidden text-ellipsis text-nowrap'>{item.name}</p>
                <p className='text-sm unwrap-text-no-wrap w-full overflow-hidden text-ellipsis text-nowrap'>{item.description}</p>
            </div>
        </div>
    )
}
