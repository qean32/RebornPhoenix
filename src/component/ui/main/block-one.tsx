import React from 'react'
import { cn } from '@lib/function'
import { useHandlerScroll } from '@/lib/castom-hook'

interface Props {
}


export const BlockOne: React.FC<Props> = ({ }: Props) => {
    const { refHandler, boolean } = useHandlerScroll(-100)

    return (
        <div className="w-full flex justify-center mt-10" ref={refHandler}>
            <div className={cn("w-8/12 py-10 transition-700", (boolean ? '' : '-translate-x-10 opacity-20'))}>
                <p className="text-7xl">ПОЧЕМУ МЫ?</p>
                <ul className="text-xl list-inside">
                    <li>Лучшие сервера</li>
                    <li>Отличный интерфейс</li>
                    <li>Вайбик</li>
                </ul>
            </div>
        </div>
    )
}
