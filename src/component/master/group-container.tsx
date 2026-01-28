import React from 'react'
import { cn } from '@/lib/function'
import { NoFindData } from '../ui'
import { useDynamickPagination, useQueryParam } from '@/lib/castom-hook';
import { userDto } from '@/model';
import { qParamName } from '@/export';

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


export const GroupContainer: React.FC<Props> = ({
    className,
    renderItem,
    noFindDataText = 'По вашему запросу ничего не найдено',
    rq: {
        RQKey,
        fetch,
        staticParam
    },
}: Props) => {
    const { param, allQ } = useQueryParam(qParamName.search)
    const { response, loading, refHandler, isEnd } =
        useDynamickPagination<userDto>(fetch, [...RQKey], 0, 10, param, [staticParam], allQ['date'], allQ['tags'])

    return (
        <div className={cn('pb-5 min-h-[400px] flex flex-col', className)}>
            {response.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem(item)}</React.Fragment>
                )
            })}
            <NoFindData title={noFindDataText} view={!response.length && !loading} />
            {isEnd && <p className='pt-3 text-center'></p>}
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
        </div>
    )
}
