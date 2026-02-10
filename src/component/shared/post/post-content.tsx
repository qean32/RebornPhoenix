import React from 'react'
import { Button, NoFindData, UnwrapFiles } from '@component/ui'
import { ViewAdmin, ViewAuthor } from '@component/master/h-order-component'
import { Modal } from '@component/case/modal'
import { MainBlock, PostInfo, CountBlock } from '.'
import { useRequest, useToast } from '@/lib/hook'
import { postType } from '@/model/post.type'
import { forumService } from '@/service'
import { useNavigate, useParams } from 'react-router-dom'
import { modalAnimationEnum } from '@/export'
import { PostContentSceleton } from '@/component/case/sceleton'

interface Props {
    className?: string
}

const ACCEESS_ACTION = 'Пост удален!'
export const PostContent: React.FC<Props> = ({ }: Props) => {
    const { id } = useParams()
    const toast = useToast()
    const navigate = useNavigate()

    const [myLike] = useRequest<boolean>(() => forumService.MY_LIKE(id ?? 0), [`my-like-${id}`])
    const [post, loading] = useRequest<postType>(() => forumService.GET_POST(id ?? 0), [`post-${id}`])

    const deletePost = () => {
        forumService.DELETE_POST(id ?? 0)
            .then(() => {
                toast('message', { text: ACCEESS_ACTION })
                navigate('/');
            })
    }

    if (!loading && !post?.id) {
        return <NoFindData title='Пост не найден!' view className='py-5' />
    }

    if (post?.title) {
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

                <PostInfo
                    id={post.id}
                    date=''
                    user={post.user}
                />
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
            </>
        )
    }

    return <PostContentSceleton />
}
