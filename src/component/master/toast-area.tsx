import React from 'react'
import { useAppSelector } from '@/lib/hook/redux'
import { toastHook } from '@component/shared'

interface Props {
    className?: string
}

export const ToastArea: React.FC<Props> = ({ }: Props) => {
    const { toasts } = useAppSelector(state => state.toast)

    return (
        <div className='fixed pointer-events-none' style={{ inset: '70px 40px', zIndex: 200 }}>
            {!!toasts.length &&
                toasts.map((item) => {
                    return toastHook(
                        {
                            keyMessage: item.key,
                            ...item
                        },
                        toasts[toasts.length - 1].id)
                })}
        </div>
    )
}
