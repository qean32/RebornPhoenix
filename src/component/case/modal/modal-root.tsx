import React from 'react'
import { useBoolean } from '@/lib/castom-hook'
import { Modal } from '@component/master/h-order-component'
import { modalAnimationDto } from '@/model'

interface Props {
    children: React.ReactNode
    modal: any
    animation: modalAnimationDto,
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
