import React from 'react'
import { CommentItem } from '@component/ui/item'
import { CommentForm } from '@/component/case/form'
import { commentDto } from '@/model'
import { useRequest } from '@/lib/castom-hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'
import { CommentsSceleton } from '@/component/case/sceleton/comments-sceleton'

interface Props {
}


export const CommentBlock: React.FC<Props> = ({ }: Props) => {
    const { id } = useParams()
    const [comments, loading, push, _delete, update] = useRequest<commentDto[]>(() => forumService.GET_COMMENTS(id ?? 0), [`post-comment-${id}`], true)

    return (
        <div className="bg-color-dark rounded-lg pb-2">
            <CommentForm update={update}
                push={push} _delete={_delete} />

            {
                !loading &&
                    !!comments?.length
                    ?
                    <p className='pl-6 py-2 text-2xl'>Коментарии</p>
                    :
                    <p className='pl-6 pb-2 text-xl'>Пока у поста нет коментариев!</p>
            }

            {!!loading && <CommentsSceleton />}

            {!!comments?.length &&
                comments?.map(item => {
                    return <CommentItem
                        {...item}
                        key={item.id}
                    />
                })
            }

        </div>
    )
}
