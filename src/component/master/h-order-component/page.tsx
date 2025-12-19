import React from 'react'
import { cn } from '@/lib/function'

interface Props {
    children: React.ReactNode
    className?: string
    size?: 'w-[45%]' | 'w-[50%]' | 'w-[60%]' | 'w-[70%]' | 'w-[75%]' | 'w-[65%]' | "w-[85%]"
}


export const Page: React.FC<Props> = ({
    children,
    className,
    size = 'w-[60%]'
}: Props) => {
    return (
        <main className={cn("w-full flex justify-center items-start pb-10", className)}>
            <div className={cn("h-full bg-color py-4 px-8 box-content", size)}>
                {children}
            </div>
        </main >
    )
}
