import React from 'react'
import { Button, UnwrapFiles } from '@component/ui'
import { ViewAuthor } from '@component/master/h-order-component'
import { Modal } from '@component/case/modal'
import { MainBlock, CommentBlock, PostInfo, CountBlock } from '.'
import { useRequest } from '@/lib/castom-hook'
import { postDto } from '@/model/post.dto'
import { forumService } from '@/service'
import { useNavigate, useParams } from 'react-router-dom'
import { commentDto } from '@/model'

interface Props {
    className?: string
}


export const PostContent: React.FC<Props> = ({ }: Props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { finaldata: comments, setFinalData: setComments } = useRequest<commentDto>(() => forumService.getComment(id ?? 0), [('post-comment' + id)])
    const { finaldata } = useRequest<postDto>(() => forumService.getPost(id ?? 0), [('post' + id)])
    const deletePost = () => {
        forumService.deletePost(id ?? 0)
            .then(() => navigate('/'))
    }

    return (
        <>
            <p className="text-4xl mb-1.5">{finaldata[0].title}</p>

            <ViewAuthor payload_id={id ?? 0}>
                <Modal.Root modal={Modal.AccessAction} props={{ fn: () => deletePost, warning: "Вы собираетесь удалить пост?", warningButtonText: 'Удалить пост' }}>
                    <Button variant="reject" className="my-2">Удалить пост</Button></Modal.Root></ViewAuthor>

            <PostInfo {...finaldata[0].user} />
            <MainBlock content={finaldata[0].content}>
                <CountBlock
                    likeCount={finaldata[0].likes}
                    userLike={false}
                />
            </MainBlock>
            <UnwrapFiles
                className='my-5'
                imgView
                files={finaldata[0].files.split(',').map(item => { return { path: item } })} />
            <CommentBlock comments={comments} />
        </>
    )
}
