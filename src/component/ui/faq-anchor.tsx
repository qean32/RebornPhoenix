import { qParamName } from '@/export';
import { useQueryParam } from '@/lib/castom-hook';
import { cn } from '@/lib/function';
import React from 'react'
// @ts-ignore
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
}


export const FaqAnchor: React.FC<Props> = ({ }: Props) => {
    const { param } = useQueryParam(qParamName.anchorLink)

    return (
        <div className="relative bg-color-dark px-5 pt-5 w-fit">
            <div className="flex flex-col sticky top-5">
                {qa.map((item, index) => {
                    return (
                        <Link to={`/faq#${index}`}>
                            <p className={cn('transition-300', (param == item && "text-red-800"))}>{item}</p></Link>
                    )
                })}
            </div>
        </div>
    )
}

const qa = [
    "Что такое d&d",
    'Понятие "слабое d&d"',
    "Как играть?",
    "Кастомные сценарии",
    "Форум",
    "Мне выдали блокировку",
]