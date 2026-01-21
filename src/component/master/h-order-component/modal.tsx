import React from 'react'
import { cn } from '@lib/function'
import { useMount } from '@lib/castom-hook'
import { Portal } from '../portal'
import { modalAnimationDto } from '@/model'

interface Props {
    className?: string
    children: React.ReactNode
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
    animation: modalAnimationDto
}


export const Modal: React.FC<Props> = ({
    className,
    children,
    view,
    animation: { close, open },
    swap
}: Props) => {
    const dispay = useMount(view)
    if (!dispay) {
        return null
    }

    return (
        <Portal>
            <div className={cn(
                "shadow z-50",
                !view && 'shadow-close'
            )}
                onClick={swap}
                value='context-menu'
                style={{ zIndex: 100 }}
            >
                <div
                    className={cn(
                        'flex w-full h-full justify-center items-center',
                        (view ? open : close),
                        className
                    )}
                    value='modal'
                >
                    {children}
                </div>
            </div>
        </Portal >
    )
}