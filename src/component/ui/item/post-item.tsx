import React from 'react'
import { Link } from 'react-router-dom'
import { postDto } from '@/model/post.dto'
import { UnwrapTags } from '@component/ui/unwrap-tags'
import { cn } from '@/lib/function'

interface Props extends postDto {
    className?: string
}

export const PostItem: React.FC<Props> = ({
    content,
    tags,
    title,
    user,
    fixed,
    department,
    likes,
    className
}: Props) => {
    return (
        <Link to={`/post/${department}/1/${title}`} className='prime-hover'>
            <div className={cn('py-2 grid cursor-pointer transition-300 mount-opacity', className)} style={{ gridTemplateColumns: '5fr 1fr 1fr' }}>
                {fixed && <img src="/icon/fixed.svg" alt="" className='absolute top-2 right-2' />}
                <div className='flex flex-col justify-between'>
                    <p className='text-2xl'>{title}</p>
                    <p className='text-sm pr-4'>{content}</p>
                    <UnwrapTags tags={tags} className='' />
                </div>
                <p className='translate-y-1'>{user.name}</p>
                <p className='translate-x-0.5 translate-y-1'>{likes ?? 0}</p>
            </div>
        </Link>
    )
}
