import React from 'react'
import { Button, UnwrapFiles } from '@component/ui'
import { ViewAdmin, ViewAuthor } from '@component/master/h-order-component'
import { Modal } from '@component/case/modal'
import { MainBlock, CommentBlock, PostInfo, CountBlock } from '.'
import { useRequest, useToast } from '@/lib/castom-hook'
import { postDto } from '@/model/post.dto'
import { forumService } from '@/service'
import { useNavigate, useParams } from 'react-router-dom'
import { modalAnimationEnum } from '@/export'

interface Props {
    className?: string
}

const ACCEESS_ACTION = 'Пост удален!'
export const PostContent: React.FC<Props> = ({ }: Props) => {
    const { id } = useParams()
    const toast = useToast()
    const navigate = useNavigate()

    const [myLike] = useRequest<boolean>(() => forumService.MY_LIKE(id ?? 0), [`my-like-${id}`])
    const [post] = useRequest<postDto>(() => forumService.GET_POST(id ?? 0), [`post-${id}`])

    const deletePost = () => {
        forumService.DELETE_POST(id ?? 0)
            .then(() => {
                toast('message', { text: ACCEESS_ACTION })
                navigate('/');
            })
    }

    if (post?.id) {

        return (
            <>
                <p className="text-4xl mb-1.5">{post.title}</p>

                <ViewAuthor payload_id={post.user.id ?? 0}>
                    <Modal.Root
                        modal={Modal.AccessAction}
                        props={{ fn: deletePost, warning: "Вы собираетесь удалить пост?", warningButtonText: 'Удалить пост' }}
                        animation={modalAnimationEnum['modal-dft']}
                    >
                        <Button variant="reject" className="my-2">Удалить пост</Button></Modal.Root>
                </ViewAuthor>
                <ViewAdmin>
                    <Modal.Root
                        modal={Modal.AccessAction}
                        props={{ fn: deletePost, warning: "Вы собираетесь удалить пост?", warningButtonText: 'Удалить пост' }}
                        animation={modalAnimationEnum['modal-dft']}
                    >
                        <Button variant="reject" className="my-2">Удалить пост</Button></Modal.Root>
                </ViewAdmin>

                <PostInfo {...post.user} />
                <MainBlock content={post.content} description={post.description}>
                    <CountBlock
                        likeCount={post.likes}
                        userLike={myLike ?? false}
                    />
                </MainBlock>
                <UnwrapFiles
                    className='my-5'
                    imgView
                    files={!!post?.files?.length ? post?.files?.split(',').map(item => { return { path: item } }) : []} />
                <CommentBlock />
            </>
        )
    }
}
