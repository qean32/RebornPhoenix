import React from 'react'
import { cn } from '@lib/function'
import { Character, Post, Session } from '.'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'

interface Props {
}

const classParent = "w-1/3 min-h-full flex flex-col gap-2 rounded-md"
export const ProfileContent: React.FC<Props> = ({ }: Props) => {
    const { param } = useQueryParam(qParamName.pContent, 'post')

    return (
        <div className={cn("flex w-[300%] pl-1 gap-1 transition-700 min-h-[520px] h-fit", (param == 'character' && '-translate-x-1/3'), param == 'session' && '-translate-x-2/3')}>
            <div className={classParent}><Post view={param == 'post' || !param} /></div>
            <div className={classParent}>
                {param == 'character' && <Character />}</div>
            <div className={classParent}>
                {param == 'session' && <Session />}</div>
        </div >
    )
}