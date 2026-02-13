import React from 'react'
import { cn } from '@lib/function'
import { useHandlerScroll } from '@/lib/hook'

interface Props {
}


export const BlockTwo: React.FC<Props> = ({ }: Props) => {
    const { refHandler, boolean } = useHandlerScroll(-100)

    return (
        <div className="w-full flex justify-center" ref={refHandler}>
            <div className={cn("w-8/12 py-10 transition-700 flex items-end flex-col", (boolean ? '' : 'translate-x-10 opacity-20'))}>
                <p className="text-7xl">ПАРТИЯ МЕЧТЫ</p>
            </div>
        </div>
    )
}
