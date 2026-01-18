import React from 'react'
import { Ava, UnwrapFiles } from '..'
import { Link } from 'react-router-dom'
import { commentDto } from '@/model'
import { CommentMenu } from '@/component/case/context-menu'
import { ViewAuthor } from '@/component/master/h-order-component'

interface Props extends commentDto {
}


export const CommentItem: React.FC<Props> = (item: Props) => {
    return (
        <div className="flex gap-2 justify-between pt-2 pb-3 px-5">
            <div className="flex gap-2">
                <Link to={`/profile/${item.user.id}/${item.user.name}`} className="flex gap-2 flex-col">
                    <Ava size="ava-sm" path={item.user.ava ?? ''} />
                </Link >
                <div className='flex flex-col gap-2 pl-2 pb-2 items-start'>
                    <Link to={`/profile/${item.user.id}/${item.user.name}`}><p className='text-2xl'>{item.user.name}</p></Link>
                    <p className='text-justify'>{item.content}</p>
                    {
                        !!item.files?.length &&
                        <>
                            <p>Прикрепленные файлы</p>
                            <UnwrapFiles files={item.files} imgView />
                        </>
                    }
                </div>
            </div>
            <div className="flex items-end flex-col relative">
                <p className='text-sm w-[100px] pl-5'>
                    {item.date}
                </p>
                <ViewAuthor payload_id={item.user.id}>
                    <CommentMenu {...item} />
                </ViewAuthor>
            </div>
        </div>
    )
}
