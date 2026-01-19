import React from 'react'
import { cn } from '@/lib/function'
import { NoFindData } from '../ui'
import { useDinamickPagination, useQueryParam } from '@/lib/castom-hook';
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
    sceleton(): React.ReactNode
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
    sceleton
}: Props) => {
    const { param } = useQueryParam(qParamName.search)
    const { allQ } = useQueryParam('')
    const { finaldata, loading, refHandler, isEnd } = useDinamickPagination<userDto>(fetch, [...RQKey], 0, 10, param, [staticParam, allQ['date'], allQ['tags']])

    return (
        <div className={cn('pb-5 min-h-[400px] flex flex-col', className)}>
            {loading && <>{sceleton()}</>}
            {finaldata.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem(item)}</React.Fragment>
                )
            })}
            <NoFindData title={noFindDataText} view={!finaldata.length && !loading} />
            {isEnd && <p className='pt-3 text-center'></p>}
            <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
        </div>
    )
}
