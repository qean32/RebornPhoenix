import React from 'react'
import { useRequest } from '@/lib/hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'
import { CountBlock } from '.'

interface Props {
    likeCount: number
}

export const CountHoc: React.FC<Props> = ({ likeCount }: Props) => {
    const { id } = useParams()
    const [myLike] = useRequest<boolean>(() => forumService.MY_LIKE(id ?? 0), [``], { suspense: false })

    return (
        <>
            {typeof myLike === 'boolean' && <CountBlock likeCount={likeCount} like={myLike} />}
        </>
    )
}
