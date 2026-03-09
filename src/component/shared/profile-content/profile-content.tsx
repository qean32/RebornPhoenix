import React from 'react'
import { cn } from '@lib/function'
import { Characters, Posts, Sessions } from '.'
import { useParams } from 'react-router-dom'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 rounded-md"
export const ProfileContent: React.FC<Props> = () => {
    const [content] = useContentThrow()
    const { id } = useParams()

    return (
        <div className={cn("flex w-[300%] pl-1 gap-1 transition-700 min-h-[520px] h-fit", (content == 'character' && '-translate-x-1/3'), content == 'session' && '-translate-x-2/3')}>
            <div className={classParent}>
                {(content == 'post' || !content) && <Posts id={id ?? 0} />}
            </div>
            <div className={classParent}>
                {content == 'character' && <Characters id={id ?? 0} />}
            </div>
            <div className={classParent}>
                {content == 'session' && <Sessions id={id ?? 0} />}
            </div>
        </div >
    )
}