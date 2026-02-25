import React from 'react'
import { cn } from '@/lib/function'
import { Toast } from '@component/master/h-order-component'

interface Props {
    className?: string
    name: string
    view: boolean
    isBackToast: boolean
}


export const ToastPushEntity: React.FC<Props> = ({
    name,
    view,
    className,
    isBackToast
}: Props) => {
    return (
        <Toast view={view} isBackToast={isBackToast}>
            <div className={cn("py-2 px-3 bg-color-dark flex gap-2 items-center", className)}>
                <img src="/icon/dragon.svg" className='icon-sm' alt="" />
                <p>Добавлен {name}</p>
            </div>
        </Toast>
    )
}
