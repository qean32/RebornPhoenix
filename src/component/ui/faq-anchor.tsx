import { qpk } from '@/export';
import { useQ } from '@/lib/castom-hook';
import { cn } from '@/lib/function';
import React from 'react'
// @ts-ignore
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
}


export const FaqAnchor: React.FC<Props> = ({ }: Props) => {
    const { param } = useQ(qpk.anchorlink)


    return (
        <div className="relative px-6 pt-4 pb-5 w-fit">
            <div className="flex flex-col sticky top-5">
                {qa.map((item, index) => {
                    return (
                        <Link key={item} to={`/faq#${index}`}>
                            <p className={cn('transition-300 text-lg hover:text-red-800', (param == item && "text-red-800"))}>{item}</p></Link>
                    )
                })}
            </div>
        </div>
    )
}

const qa = [
    "Что такое d&d",
    "Как играть?",
    'Понятие "слабое d&d"',
    "Кастомные сценарии",
    "Форум",
    "Мне выдали блокировку",
]