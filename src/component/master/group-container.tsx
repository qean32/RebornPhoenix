import React from 'react'
import { cn } from '@/lib/function'
import { useDinamickPaginationFake } from '@/lib/castom-hook/use-dinamick-pagination-fake'
import { Loader, NoFindData } from '../ui'

interface Props {
    className?: string
    renderItem(item: any): React.ReactNode;
    items: any[]
    noFindDataText?: string
}


export const GroupContainer: React.FC<Props> = ({
    className,
    renderItem,
    items,
    noFindDataText = 'По вашему запросу ничего не найдено'
}: Props) => {
    const { finaldata, loading, refHandler, isEnd } = useDinamickPaginationFake(0, '', items)

    return (
        <div className={cn('pb-5 min-h-[400px] flex flex-col', className)}>
            {finaldata.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem(item)}</React.Fragment>
                )
            })}
            <NoFindData title={noFindDataText} view={!finaldata.length} />
            {loading &&
                <div className="flex-1 flex justify-center items-center">
                    <Loader />
                </div>
            }
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            {!isEnd ? <div className="w-full flex justify-center items-center"><Loader /></div> : <p>Конец очереди</p>}
        </div>
    )
}
