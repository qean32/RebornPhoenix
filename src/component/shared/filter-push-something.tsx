import React from 'react'
import { cn } from '@lib/function'
import { Search, SelectToQuery } from '@component/ui'
import { sourses } from '@/export'

interface Props {
    className?: string
    type: 'map' | 'entity' | 'object'
}


export const FilterPushToSession: React.FC<Props> = React.memo(({ className, type }: Props) => {
    return (
        <div className={cn('pl-5 sticky top-0 bg-color py-6 pt-4 z-20', className)}>
            <p className='text-2xl pl-0.5 pb-2'>Фильтры</p>
            <div className="flex gap-3 pt-2 pr-1">
                <Search className='w-2/3' />
                <SelectToQuery
                    options={sourses[type]}
                />
            </div>
        </div>
    )
})
