import { SessionMenu } from '@/component/case/context-menu'
import { sessionDto } from '@/model'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props extends sessionDto {
}


export const SessionItem: React.FC<Props> = (item: Props) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/session/${item.id}/${item.name}`)} className='cursor-pointer mount-opacity h-[100px] flex gap-4 p-4 py-3 bg-color-darkness-hover transition-300'>
            {/* @ts-ignore */}
            <div className="h-full w-[130px] bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${`${item?.path}`})` }}></div>
            <p className='text-2xl'>{item.name}</p>
            <SessionMenu {...item} />
        </div>
    )
}
