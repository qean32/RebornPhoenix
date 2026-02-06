import React from 'react'
import { cn } from '@lib/function'
import { Character, Post, Session } from '.'
import { useQ } from '@/lib/hook'
import { qpk } from '@/export'
import { useParams } from 'react-router-dom'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 rounded-md"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { param } = useQ(qpk.contentprofile, 'post')
    const { id } = useParams()

    return (
        <div className={cn("flex w-[300%] pl-1 gap-1 transition-700 min-h-[520px] h-fit", (param == 'character' && '-translate-x-1/3'), param == 'session' && '-translate-x-2/3')}>
            <div className={classParent}>
                <Post id={id ?? 0} view={param == 'post' || !param} />
            </div>
            <div className={classParent}>
                <Character view={param == 'character'} id={id ?? 0} />
            </div>
            <div className={classParent}>
                <Session id={id ?? 0} view={param == 'session'} />
            </div>
        </div >
    )
}