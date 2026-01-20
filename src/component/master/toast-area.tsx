import React from 'react'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { toastHook } from '@component/shared'

interface Props {
    className?: string
}

export const ToastArea: React.FC<Props> = ({ }: Props) => {
    const { toasts } = useAppSelector(state => state.toast)

    return (
        <div className='fixed z-50 pointer-events-none' style={{ inset: '70px 40px' }}>
            {!!toasts.length && toasts.map(({ id, key, payload, view }) => {
                return toastHook(
                    {
                        keyMessage: key,
                        id,
                        view,
                        payload
                    },
                    toasts[toasts.length - 1].id)
            })}
        </div>
    )
}
