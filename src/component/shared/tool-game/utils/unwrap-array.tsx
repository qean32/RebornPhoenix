import { NoFindData } from '@/component/ui'
import React from 'react'

interface Props {
    items: any[]
    renderItem(item: any): React.ReactNode
    title: string
}


export const UnwrapArray: React.FC<Props> = ({
    items,
    title,
    renderItem,
}: Props) => {
    return (
        <div className='w-1/4'>
            <p className='pl-3 pb-2'>{title}</p>
            <div className='h-full pt-2 pb-2 max-h-full overflow-scroll'>
                {items.map(item => {
                    return <React.Fragment key={item.id} >{renderItem(item)}</React.Fragment>
                })}

                {
                    !items.length
                    &&
                    <div className="flex justify-center pt-10">
                        {!items.length && <NoFindData title='ТУТ ПОКА ПУСТО' />}
                    </div>
                }
            </div>
        </div>
    )
}
