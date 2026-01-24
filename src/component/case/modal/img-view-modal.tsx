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
    const { param } = useQueryParam(qParamName.viewimg)
    const [statePath, setStatePath] = React.useState(param)

    React.useEffect(() => {
        if (!param) {
            const t = setTimeout(() => { setStatePath('') }, 200)

            return () => {
                clearTimeout(t)
            }
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
            <div className="max-w-[98%] h-[95%] overflow-hidden rounded-md flex justify-center items-center" onClick={stopPropagation}>
                <img src={statePath} alt="" style={{ maxHeight: '95%' }} />
            </div>
        </Modal>
    )
}
