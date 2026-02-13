import React from 'react'
import { useBoolean } from '@/lib/hook'
import { Modal } from '@component/master/h-order-component'
import { modalAnimationType } from '@/model'

interface Props {
    children: React.ReactNode
    modal: any
    animation: modalAnimationType,
    props?: {
        fn?: any
        warningButtonText?: string
        warning?: string
        type?: string
        renderItem?: (item: any) => React.ReactNode
        accept?: any
        id?: string
    },
    propsModal?: {
        className: string
    }
}


export const Root: React.FC<Props> = React.memo(({
    children,
    modal: ModalChildren,
    props,
    propsModal,
    animation
}: Props) => {
    const { boolean, swap } = useBoolean()

    return (
        <>
            <div onClick={(e) => { e.stopPropagation(); swap() }}>
                {children}
            </div>
            <Modal
                swap={swap}
                view={boolean}
                {...propsModal}
                animation={animation}
            >
                <ModalChildren swap={swap} {...props} />
            </Modal>
        </>
    )
})
