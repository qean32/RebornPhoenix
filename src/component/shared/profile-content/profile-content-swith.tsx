import React from 'react'
import { cn } from '@lib/function'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
}

const map = new Map([
    ['Посты', 'post'],
    ['Персонажи', 'character'],
    ['Игры', 'session']
])


export const ProfileContentSwith: React.FC<Props> = () => {
    const [content, swapContent] = useContentThrow()


    const swap = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (map.get(e.target.innerHTML))
            // @ts-ignore
            swapContent(map.get(e.target.innerHTML))
    }


    return (
        <div className="mt-5 flex gap-2 pt-2 pl-1.5 pb-5 w-[100%]" onClick={swap} >
            <p className={cn("cursor-pointer text-xl", ((content == 'post' || !content) && 'font-bold'))} >Посты</p>
            <p className={cn("cursor-pointer text-xl", (content == 'character' && 'font-bold'))} >Персонажи</p>
            <p className={cn("cursor-pointer text-xl", (content == 'session' && 'font-bold'))} >Игры</p>
        </div>
    )
}
