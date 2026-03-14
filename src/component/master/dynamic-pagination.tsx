import React from 'react'
import { cn } from '@/lib/function'
import { NoFindData } from '../ui'
import { useDynamicPagination } from '@/lib/hook';
import { userInterface } from '@/model';

interface Props {
    className?: string
    renderItem(item: any): React.ReactNode;
    noFindDataText?: string
    rq: {
        fetch: Function,
        RQKey: string[],
        staticParam: any[]
    }
}

export const DynamicPagination: React.FC<Props> = ({
    className,
    renderItem,
    noFindDataText = 'По вашему запросу ничего не найдено',
    rq: {
        RQKey,
        fetch,
        staticParam
    },
}: Props) => {
    const { response, loading, refHandler, isEnd } =
        useDynamicPagination<userInterface>(fetch, [...RQKey], 0, 10, staticParam)

    return (
        <div className={cn('pb-5 min-h-[100vh] flex flex-col', className)}>
            {response.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem(item)}</React.Fragment>
                )
            })}
            {!response.length && !loading && <NoFindData title={noFindDataText} />}
            {!isEnd && <p className='pt-3 px-7'>Загрузка</p>}
            <div className='w-100 min-h-[50px]' ref={refHandler}></div>
        </div>
    )
}
