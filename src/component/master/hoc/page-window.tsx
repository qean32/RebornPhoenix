import React from 'react'
import { cn } from '@/lib/function'

interface Props {
    children: React.ReactNode
    className?: string
}


export const PageWindow: React.FC<Props> = ({
    children,
    className,
}: Props) => {
    return (
        <main className={cn("flex justify-center items-center w-full h-[90vh] bg-icons", className)}>

            <div className="w-fit h-[40vh] -translate-y-1/3">
                <div className="px-7 bg-color rounded-lg py-10 pt-7 outline-bg-light">
                    {children}
                </div>
            </div>
        </main>
    )
}
