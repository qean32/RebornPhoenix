import React from 'react'
import { cn } from '@lib/function'
import { useHandlerScroll } from '@/lib/castom-hook'

interface Props {
}


export const BlockThree: React.FC<Props> = ({ }: Props) => {
    const { refHandler, boolean } = useHandlerScroll(-100)

    return (
        <div className="w-full flex justify-center" ref={refHandler}>
            <div className={cn("w-8/12 py-10 transition-700", (boolean ? '' : 'translate-y-10 opacity-20'))}>
                <p className="text-7xl">ЧТО ТАКОЕ <span className="text-red-800">D&D</span> ?</p>
                <p className="text-2xl pt-2">Dungeons & Dragons (D&D, DnD; Подземелья и драконы) — настольная ролевая игра в жанре фэнтези.</p>
                <p className="text-md text-justify">
                    В игре участвуют ведущий (так называемый «мастер») и несколько игроков, число которых варьируется в зависимости от редакции и пожеланий участников. Обычно один игрок руководит в игровом мире действиями одного персонажа. Мастер действует от лица всех неигровых персонажей, описывает окружающую среду и происходящие в ней события.
                    В течение игры каждый участник задаёт действия для своего персонажа, а результаты действий определяются мастером в соответствии с правилами. Случайные события моделируются броском кубика.
                    Иногда решения мастера могут не соответствовать правилам. Это является Золотым правилом игры: «ДМ всегда прав», так называемым «мастерским произволом».</p>
            </div>
        </div>
    )
}
