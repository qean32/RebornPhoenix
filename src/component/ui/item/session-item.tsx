import { SessionMenu } from '@/component/case/context-menu'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    id: number
    name: string
}


export const SessionItem: React.FC<Props> = ({ id, name }: Props) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/session/${id}/${name}`)} className='cursor-pointer mount-opacity h-[100px] flex gap-4 p-4 py-3 bg-color-darkness-hover transition-300'>
            <div className="h-full w-[130px] bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${'/img/carousel-item-1.jpg'})` }}></div>
            <p className='text-2xl'>{name}</p>
            <SessionMenu />
        </div>
    )
}
