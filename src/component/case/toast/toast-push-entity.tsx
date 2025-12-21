import React from 'react'
import { cn } from '@/lib/function'
import { Toast } from '@component/master/h-order-component'

interface Props {
    className?: string
    name: string
    view: boolean
    backToast: boolean
}


export const ToastPushEntity: React.FC<Props> = ({
    name,
    view,
    className,
    backToast
}: Props) => {
    return (
        <Toast view={view} backToast={backToast}>
            <div className={cn("py-2 px-3 bg-color-dark flex gap-2 items-center", className)}>
                <img src="/icon/dragon.svg" className='icon-sm' alt="" />
                <p>Добавлен {name}</p>
            </div>
        </Toast>
    )
}
