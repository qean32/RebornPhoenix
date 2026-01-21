import React from 'react'
import { Logo } from '@component/ui'
import { useBoolean } from '@/lib/castom-hook'
import { cn, getBetweenNumber } from '@/lib/function'
import { tip } from '@/export'

interface Props {
}


export const MainLoader: React.FC<Props> = ({ }: Props) => {
    const { boolean, off } = useBoolean(true)
    const ref = React.useRef(tip[getBetweenNumber(1, tip.length)])

    React.useEffect(() => {
        setTimeout(off, 1000)
    }, [])
    return (
        <div className={cn("fixed flex-col gap-7 inset-0 bg-color-darkness flex justify-center items-center transition-300", (!boolean && 'pointer-events-none opacity-0'))} style={{ zIndex: '60' }}>
            <Logo size='icon-2xl' />
            <p className='text-md max-w-[400px] text-center'>
                {ref.current ?? "Удачи!"}
            </p>
        </div>
    )
}
