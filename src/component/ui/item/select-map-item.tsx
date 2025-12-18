import React from 'react'
import { cn } from '@lib/function'
import { mapDto } from '@/model'
import { MapItemMenu } from '@/component/case/context-menu'

interface Props {
    path: string
    data: mapDto
    value: number
}


export const SelectMapItem: React.FC<Props> = (item: Props) => {
    return (
        <div
            data={JSON.stringify(item.data)}
            className={cn(
                'bg-img bg-shadow-prime relative rounded-sm cursor-pointer hover:border-1 h-[9vh]',
                (item.data.id == item.value && 'border-1')
            )}
            style={{ transformOrigin: 'bottom', backgroundImage: `url(${`${item.path}`})` }}>
            <div className="absolute right-0">
                <MapItemMenu {...item.data} />
            </div>
        </div>
    )
}
