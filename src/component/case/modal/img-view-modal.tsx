import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'

interface Props {
    view: boolean | string
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement> | any
}


export const ViewImg: React.FC<Props> = ({ view, swap }: Props) => {
    const { param } = useQueryParam(qParamName.vImg)
    const [statePath, setStatePath] = React.useState(param)

    React.useEffect(() => {
        if (!param) {
            setTimeout(() => { setStatePath('') }, 200)
            return
        }
        setStatePath(param)
    }, [param])

    return (
        <Modal
            swap={swap}
            view={Boolean(view)}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color max-h-11/12 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <img src={statePath} alt="" />
            </div>
        </Modal>
    )
}
