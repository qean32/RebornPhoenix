import React from 'react'
import { IconAndCount, IconAndNumber } from '@/component/ui'
import { useBoolean, useDebounceFunction } from '@/lib/castom-hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'

interface Props {
    likeCount: number
    userLike: boolean
    viewCount?: number
}

export const CountBlock: React.FC<Props> = ({ likeCount, userLike, viewCount = 0 }: Props) => {
    const { boolean: action, swap } = useBoolean(userLike)
    const { id } = useParams()

    const request = useDebounceFunction(() => {
        forumService.likeAction(id ?? 0)
    }, 1500)

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
