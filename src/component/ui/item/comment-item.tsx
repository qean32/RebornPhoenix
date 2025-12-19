import React from 'react'
import { Ava, UnwrapFiles } from '..'
import { Link } from 'react-router-dom'
import { commentDto } from '@/model'
import { CommentMenu } from '@/component/case/context-menu'

interface Props extends commentDto {
}


export const CommentItem: React.FC<Props> = ({
    text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius aperiam dignissimos obcaecati sint blanditiis maiores at quibusdam in consequuntur ducimus.',
    user = {
        ava: 'zxc',
        email: 'zxc',
        id: 1,
        name: 'zxczxc'
    },
    files = [
        { path: '/img/auth.jpg' },
    ],
    date = '20.05.2006',
    id = 1
}: Props) => {
    return (
        <div className="flex gap-2 justify-between pt-2 px-5">
            <div className="flex gap-2">
                <Link to={`/profile/${user.id}/${user.name}`} className="flex gap-2 flex-col">
                    <Ava size="ava-sm" path={user.ava} />
                </Link >
                <div className='flex flex-col gap-2 pl-2 pb-2 items-start'>
                    <Link to={'/profile/2/zxcc'}><p className='text-2xl'>{user.name}</p></Link>
                    <p className='text-justify'>{text}</p>
                    {
                        !!files.length &&
                        <>
                            <p>Прикрепленные файлы</p>
                            <UnwrapFiles files={files} imgView />
                        </>
                    }
                </div>
            </div>
            <div className="flex items-end flex-col relative">
                <p className='text-sm w-[100px] pl-5'>
                    {date}
                </p>
                <CommentMenu {...{ date, files, id, text, user }} />
            </div>
        </div>
    )
}
