import React from 'react'
import { mapDto } from '@/model'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'


export const InStoreMapItem: React.FC<mapDto> = (item: mapDto) => {
    const { pushQ } = useQueryParam(qParamName.viewimg)

    const clickHAndler = () => {
        pushQ(item.path)
    }
    return (
        <div
            className="flex gap-4 mount-opacity h-[10vh] m-1 p-2 cursor-pointer bg-color-dark-hover transition-300 rounded-sm hover-hide-img"
            data={JSON.stringify({ ...item, isMap: true, path: `${process.env.SERVER_HOST_STORAGE}${item.path}` })}
        >
            <div className="h-full w-1/2 bg-img bg-shadow transition-300 rounded-sm" style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${item.path})` }} onClick={clickHAndler}></div>
            <p className='pointer-events-none unwrap-text w-1/2 h-full text-nowrap overflow-hidden text-ellipsis rounded-sm'>{item.name}</p>
        </div>
    )
}
