import React from 'react'
import { Button, UnwrapFiles } from '@component/ui'
import { ViewAuthor } from '@component/master/h-order-component'
import { Modal } from '@component/case/modal'
import { MainBlock, CommentBlock, PostInfo } from '.'
import { f_user } from '@/f'

interface Props {
    className?: string
}


export const PostContent: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <p className="text-4xl mb-1.5">НАЗВАНИЕ</p>
            <ViewAuthor>
                <Modal.Root modal={Modal.AccessAction} props={{ fn: () => console.log('zxc'), warning: "Вы собираетесь удалить пост?", warningButtonText: 'Удалить пост' }}>
                    <Button variant="reject" className="my-2">Удалить пост</Button></Modal.Root></ViewAuthor>
            <PostInfo {...f_user[0]} email='' />
            <MainBlock />
            <UnwrapFiles
                className='my-5'
                imgView
                files={[{ path: '/img/auth.jpg' }]} />
            <CommentBlock />
        </>
    )
}
