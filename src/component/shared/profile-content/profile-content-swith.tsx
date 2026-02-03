import React from 'react'
import { cn } from '@lib/function'
import { useQ } from '@/lib/castom-hook'
import { qpk } from '@/export'

interface Props {
}

const map = new Map([
    ['Посты', 'post'],
    ['Персонажи', 'character'],
    ['Игры', 'session']
])


export const ProfileContentSwith: React.FC<Props> = ({ }: Props) => {
    const { pushQ, param } = useQ(qpk.contentprofile)

    const swap = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (map.get(e.target.innerHTML))
            // @ts-ignore
            pushQ(map.get(e.target.innerHTML))
    }


    return (
        <div className="mt-5 flex gap-2 pt-2 pl-1.5 pb-5 w-[100%]" onClick={swap} >
            <p className={cn("cursor-pointer text-xl", ((param == 'post' || !param) && 'font-bold'))} >Посты</p>
            <p className={cn("cursor-pointer text-xl", (param == 'character' && 'font-bold'))} >Персонажи</p>
            <p className={cn("cursor-pointer text-xl", (param == 'session' && 'font-bold'))} >Игры</p>
        </div>
    )
}
