import React from 'react'
import { cn } from '@/lib/function'
import { Toast } from '@/component/master/hoc'

interface Props {
    className?: string
    view: boolean
    path: string
    name: string
    isBackToast: boolean
}


export const ToastEventMessage: React.FC<Props> = ({
    className,
    view,
    name,
    path,
    isBackToast
}: Props) => {
    return (
        <Toast view={view} isBackToast={isBackToast}>
            <div className={cn("py-5 px-25 bg-color-dark flex gap-2 items-center bg-img", className)} style={{ backgroundImage: `url(${path})` }}>
                <p className='text-3xl font-bold text-gray-100' style={{ letterSpacing: '5px' }}>{name}</p>
            </div>
        </Toast>
    )
}
