import React from 'react'
import { IconAndCount, IconAndNumber } from '@/component/ui'
import { useBoolean, useDebounceFunction, useRequest } from '@/lib/hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'

interface Props {
    likeCount: number
    viewCount?: number
}

export const CountBlock: React.FC<Props> = ({ likeCount, viewCount = 0 }: Props) => {
    const [myLike] = useRequest<boolean>(() => forumService.MY_LIKE(id ?? 0), [``])
    const { id } = useParams()
    const { boolean: action, swap } = useBoolean(myLike)

    const request = useDebounceFunction(() => {
        forumService.LIKE_ACTION(id ?? 0)
    }, 1000)

    function clickHandler() {
        swap()
        request()
    }

    return (
        <div className="flex gap-2 -translate-x-1">
            <div onClick={clickHandler}>
                <IconAndCount count={likeCount} icon="/icon/like-no-fill.svg" iconAction="/icon/like-fill.svg" action={action} />
            </div>
            <IconAndNumber count={viewCount} icon="/icon/view.svg" />
        </div>
    )
}
