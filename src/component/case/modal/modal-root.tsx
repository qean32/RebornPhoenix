import React from 'react'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
    children: React.ReactNode
    modal: any
    props?: {
        fn?: any
        warningButtonText?: string
        warning?: string
        type?: string
        renderItem?: (item: any) => React.ReactNode
        accept?: any
        id?: string
    }
}


export const Root: React.FC<Props> = ({ children, modal: Modal, props }: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            <div onClick={(e) => { e.stopPropagation(); swap() }}>
                {children}
            </div>
            <Modal
                swap={swap}
                {...props}
                view={boolean}
            />
        </>
    )
}
