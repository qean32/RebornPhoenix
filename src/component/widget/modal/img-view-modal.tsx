import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@/component/master/hoc'
import { useViewImgThrow } from '@/lib/hook/throw'

interface Props {
}


export const ViewImg: React.FC<Props> = ({ }: Props) => {
    const [img, _, clear] = useViewImgThrow()
    const [statePath, setStatePath] = React.useState<string>(img)

    React.useEffect(() => {
        if (!img) {
            const timeout = setTimeout(() => { setStatePath('') }, 200)

            return () => {
                clearTimeout(timeout)
            }
        }
        setStatePath(img)
    }, [img])

    return (
        <Modal
            swap={clear}
            view={Boolean(img)}
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
