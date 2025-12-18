import React from 'react'
import { cn } from '@/lib/function'
import { Toast } from '@component/master/h-order-component'

interface Props {
    className?: string
    view: boolean
    text: string
}


export const ToastMessage: React.FC<Props> = ({
    className,
    view,
    text
}: Props) => {
    return (
        <Toast view={view}>
            <div className={cn("py-3 px-4 flex gap-4 items-center", className)}>
                <img src="/icon/logo-short.svg" className='icon-sm' alt="" />
                <p className='text-xl'>{text}</p>
            </div>
        </Toast>
    )
}
