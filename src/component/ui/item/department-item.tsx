import React from 'react'
import { Link } from 'react-router-dom'
import { PostItem } from './post-item'
import { departmentType } from '@/model'

interface Props extends departmentType {
}


export const DepartmentItem: React.FC<Props> = ({
    description,
    name,
    img,
    count,
    fixed
}: Props) => {
    return (
        <Link to={`/department/${name}`}>
            <div className="flex gap-10 border-b">
                <div className="overflow-hidden w-full pl-2">
                    <p className="text-4xl">{name.toUpperCase()}</p>
                    <p className='text-md pt-2'>{description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img src="/icon/news.svg" alt="" className='icon-sm-' />
                        <p>{count}</p>
                    </div>
                    <PostItem {...fixed} department={name} fixed className='pl-2 -translate-x-2' />
                </div>
                <div className='w-1/6 pb-4 pt-0'>
                    <div className="rounded-lg w-full bg-img bg-shadow h-full"
                        style={{ backgroundImage: `url(${process.env.SERVER_HOST_STORAGE}${img})` }}
                    ></div>
                </div>
            </div>
        </Link>
    )
}