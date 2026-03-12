import { cn } from '@/lib/function';
import { useAnchorThrow } from '@/lib/hook/throw';
import React from 'react'
// @ts-ignore
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
    qa: string[]
}


export const InfoAnchor: React.FC<Props> = ({ qa }: Props) => {
    const [anchor] = useAnchorThrow()


    return (
        <div className="relative px-6 pt-4 pb-5 w-[270px]">
            <div className="flex flex-col sticky top-5">
                {qa.map((item, index) => {
                    return (
                        <Link key={item} to={`#${index}`}>
                            <p className={cn('transition-300 text-lg hover:text-red-800', (anchor == item && "text-red-800"))}>{item}</p></Link>
                    )
                })}
            </div>
        </div>
    )
}