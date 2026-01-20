import React from 'react'
import { CommentItem } from '@component/ui/item'
import { CommentForm } from '@/component/case/form'
import { commentDto } from '@/model'
import { useRequest } from '@/lib/castom-hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'

interface Props {
}


export const CommentBlock: React.FC<Props> = ({ }: Props) => {
    const { id } = useParams()
    const [comments, _, setComments] = useRequest<commentDto[]>(() => forumService.getComments(id ?? 0), [`post-comment-${id}`])
    const pushComment = (comment: commentDto) => {
        setComments(prev => [comment, ...prev])
    }
    const updateComment = (comment: commentDto) => {
        setComments(prev => [comment, ...prev.filter(item => item.id != comment.id)])
    }
    const deleteComment = (comment: commentDto) => {
        setComments(prev => prev.filter(item => item.id != comment.id))
    }

    return (
        <div className="bg-color-dark rounded-lg pb-2">
            <CommentForm update={updateComment}
                push={pushComment} delete_={deleteComment} />
            {!!comments?.length
                ?
                <p className='pl-6 py-2 text-2xl'>Коментарии</p>
                :
                <p className='pl-6 pb-2 text-xl'>Пока у поста нет коментариев!</p>
            }
            {comments?.map(item => {
                return <CommentItem {...item} key={item.id} />
            })}
        </div>
    )
}
