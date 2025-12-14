import { nameProject } from '@/export'
import React from 'react'
import { Logo } from '../logo'
import { useHandlerScroll } from '@/lib/castom-hook'
import { cn } from '@/lib/function'

interface Props {
}


export const LargeLogo: React.FC<Props> = ({ }: Props) => {
    const { refHandler, boolean } = useHandlerScroll(-200)

    return (
        <div className={cn(
            "w-full h-[600px] flex-col flex justify-center items-center pb-10 transition-700",
            (boolean ? 'opacity-100' : ' opacity-0 translate-y-4')
        )} ref={refHandler} >
            <div className="flex flex-col gap-7 items-center">
                <Logo size="icon-3xl" />
                <p className='text-3xl'>{nameProject}</p>
            </div>
            <a href={process.env.DISCORD} target='_blank' className='hover:-translate-y-1 transition-300 cursor-pointer'>
                <img src="/icon/discord.svg" alt="" width={100} />
            </a>
        </div>
    )
}
