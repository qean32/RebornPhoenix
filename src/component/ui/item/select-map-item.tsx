import React from 'react'
import { cn } from '@lib/function'
import { mapInterface } from '@/model'
import { MapMenu } from '@/component/case/context-menu'

interface Props {
    path: string
    name: string
    data: mapInterface
    value: number | string
}


export const SelectMapItem: React.FC<Props> = (item: Props) => {
    return (
        <div>
            <p className='text-nowrap w-full overflow-hidden'>
                {item.name}
            </p>
            <div
                data={JSON.stringify(item.data)}
                className={cn(
                    'bg-img bg-shadow-prime relative rounded-sm cursor-pointer hover:border-1 h-[9vh]',
                    (item.data.id == item.value && 'border-1')
                )}
                style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${item.path}`})` }}>
                <div className="absolute right-0">
                    <MapMenu {...item.data} />
                </div>
            </div>
        </div>
    )
}
