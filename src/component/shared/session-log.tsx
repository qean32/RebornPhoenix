import React from 'react'
import { Portal } from '../master/h-order-component'
import { positionType } from '@/model'
import { useAppSelector } from '@/lib/hook/redux';

interface Props {
}


export const SessionLog: React.FC<Props> = ({ }: Props) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [offset, setOffset] = React.useState<positionType>({ left: 0, top: 0 })
    const { logs } = useAppSelector(state => state.log)

    const dragEnd = (e: any) => {
        if (ref.current) {
            const top = e.pageY - e.target.parentElement.parentElement.offsetTop - offset.top
            const left = e.pageX - e.target.parentElement.parentElement.offsetLeft - offset.left

            ref.current.style.top = top + 'px'
            ref.current.style.left = left + 'px'
        }
    }

    React.useEffect(() => {
        const signal = new AbortController
        ref.current?.addEventListener('dragstart', (e) => {
            e.stopPropagation()
            setOffset({ left: e.offsetX, top: e.offsetY })
        }, signal)

        return () => signal.abort()
    }, [])

    return (
        <Portal>

            <div
                className='absolute top-5 left-5 z-50 px-5 bg-color rounded-sm cursor-move outline-bg-light w-[400px] max-h-[210px] overflow-scroll'
                draggable
                onDragEnd={dragEnd} ref={ref}
            >
                {!!logs.length && logs.map(item =>
                    <p className='py-1'>{item}</p>
                )}
            </div>
        </Portal>
    )
}
