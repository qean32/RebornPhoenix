import React from 'react'
import { useBoolean, useThrottleFunction } from '@lib/hook'
import { cn } from '@lib/function'

interface Props {
}

const clickHandler = () => {
    window.scrollTo(0, 0)
}

export const ScrollTop: React.FC<Props> = ({ }: Props) => {
    const { boolean, on, off } = useBoolean()
    const throttledFn = useThrottleFunction(() => {
        if (window.scrollY > 1200) {
            on()
        } else {
            off()
        }
    }, 700)

    React.useEffect(() => {
        window.addEventListener('scroll', throttledFn)
        return () => {
            window.removeEventListener('scroll', throttledFn)
        }
    }, [])

    return (
        <div
            className={cn('bg-color-darkness rounded-full p-3 fixed top-4 right-3 transition-02 hover:-translate-y-2 cursor-pointer z-50 hover:opacity-60',
                (boolean ? 'opacity-100' : 'opacity-0 pointer-events-none'))}
            onClick={clickHandler}>
            <img src="/icon/double-arrow.svg" alt="" className='icon-sm rotate-90' />
        </div>
    )
}
