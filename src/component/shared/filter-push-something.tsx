import React from 'react'
import { cn } from '@lib/function'
import { Search, SelectToQuery } from '@component/ui'

interface Props {
    className?: string
}


export const FilterPushToSession: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('pl-5 sticky top-0 bg-color py-6 pt-4 z-20', className)}>
            <p className='text-2xl pl-0.5 pb-2'>Фильтры</p>
            <div className="flex gap-3 pt-2 pr-1">
                <Search className='w-2/3' />
                <SelectToQuery
                    options={[
                        { value: '0', title: 'Все', id: 0 },
                        { value: '1', title: 'Кастомный', id: 1 },
                        { value: '2', title: 'Хелуин', id: 2 }
                    ]}
                />
            </div>
        </div>
    )
}
