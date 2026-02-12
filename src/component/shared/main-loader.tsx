import React from 'react'
import { Logo } from '@component/ui'
import { useBoolean } from '@/lib/hook'
import { cn, getBetweenNumber } from '@/lib/function'
import { tip } from '@/export'
import { Portal } from '../master/h-order-component'

interface Props {
    infinity?: boolean
}


export const MainLoader: React.FC<Props> = ({ infinity }: Props) => {
    const { boolean, off } = useBoolean(true)
    const ref = React.useRef(tip[getBetweenNumber(1, tip.length)])

    if (infinity) {
        return (
            <Portal>

                <div className={cn("fixed flex-col gap-7 inset-0 bg-color-darkness flex justify-center items-center transition-300")} style={{ zIndex: '60' }}>
                    <Logo size='icon-2xl' />
                    <p className='text-md max-w-[400px] text-center'>
                        {ref.current ?? tip[0]}
                    </p>
                </div>
            </Portal>
        )
    }

    React.useEffect(() => {
        setTimeout(off, 2000)
    }, [])

    return (
        <Portal>

            <div className={cn("fixed flex-col gap-7 inset-0 bg-color-darkness flex justify-center items-center transition-300", (!boolean && 'pointer-events-none opacity-0'))} style={{ zIndex: '60' }}>
                <Logo size='icon-2xl' />
                <p className='text-md max-w-[400px] text-center'>
                    {ref.current ?? tip[0]}
                </p>
            </div>
        </Portal>
    )
}
