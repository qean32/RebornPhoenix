import React from 'react'
import { cn } from '@lib/function'
import { useBoolean } from '@lib/castom-hook'

interface Props {
    className?: string
    iconAction?: string
    icon: string
    count: number
    action?: boolean
}


export const IconAndCount: React.FC<Props> = ({
    className,
    iconAction,
    icon,
    count,
    action
}: Props) => {
    const [value, setValue] = React.useState(count)
    const { boolean, swap } = useBoolean(action)

    const clickHandler = () => {
        if (value == count && action)
            setValue(prev => --prev)
        else if (value == count && !action)
            setValue(prev => ++prev)
        else
            setValue(count)
        swap()
    }
    return (
        <div className={cn('overflow-hidden py-5 flex gap-2 h-[30px] bg-color-light-hover transition-300 px-2 cursor-pointer items-center rounded-2xl', className)} onClick={clickHandler}>
            <img src={boolean ? iconAction : icon} className='icon-sm-' alt="" />
            <div>
                <div className='flex'>
                    {((count + 1).toString()).split('').map((item, _) =>
                        <p key={_} className={cn(value > count && 'translate-y-full')} style={{ transition: `${(_ + 1) * 0.2}s` }}>{item}</p>
                    )}
                </div>
                <div className='flex'>
                    {(count.toString()).split('').map((item, _) =>
                        <p key={_} className={cn(value != count && (value > count ? 'translate-y-full' : '-translate-y-full'))} style={{ transition: `${(_ + 1) * 0.2}s` }}>{item}</p>
                    )}
                </div>
                <div className='flex'>
                    {((count - 1).toString()).split('').map((item, _) =>
                        <p key={_} className={cn(value < count && '-translate-y-full')} style={{ transition: `${(_ + 1) * 0.2}s` }}>{item}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
