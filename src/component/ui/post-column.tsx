import React from 'react'
import { cn } from '@lib/function'

interface Props {
    className?: string
}


export const PostColumn: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn("py-3 grid pl-0.5", className)} style={{ gridTemplateColumns: '5fr 1fr 1fr' }}>
            <p>Тема & Описание</p>
            <p>Автор</p>
            {/* <p>Раздел</p> */}
            <p>Нравится</p>
        </div>
    )
}
