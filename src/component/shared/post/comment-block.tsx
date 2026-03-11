import React from 'react'
import { CommentItem } from '@component/ui/item'
import { CommentForm } from '@component/widget/form'
import { commentType } from '@/model'
import { useRequestEditable } from '@/lib/hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'

interface Props {
}


export const CommentBlock: React.FC<Props> = () => {
    const { id } = useParams()
    const [comments, loading, actions] = useRequestEditable<commentType[]>(() => forumService.GET_COMMENTS(id ?? 0), [`post-comment-${id}`])

    return (
        <div className="bg-color-dark rounded-lg pb-2">
            <CommentForm {...actions} />

            {
                !loading &&
                    !!comments?.length
                    ?
                    <p className='pl-6 py-2 text-2xl'>Коментарии</p>
                    :
                    <p className='pl-6 pb-2 text-xl'>У поста пока нет коментариев!</p>
            }

            <Content comments={comments} />
        </div>
    )
}


const Content: React.FC<{ comments: commentType[] }> = ({ comments }: { comments: commentType[] }) => {
    return <>
        {!!comments?.length &&
            comments?.map(item => {
                return <CommentItem
                    {...item}
                    key={item.id}
                />
            })}
    </>
}
