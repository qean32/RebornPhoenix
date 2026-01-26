import React from 'react'
import ContentLoader from 'react-content-loader'
import { CommentSceleton } from './item'
import { contentLoaderProps } from '@/export'

interface Props {
}


export const CommentsSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="px-5">
            <ContentLoader
                width='100%'
                height='220px'
                {...contentLoaderProps}
            >
                {
                    // @ts-ignore
                    Array(2).fill().map((_, i) => {
                        return <CommentSceleton key={i} y={i * 110} />
                    })
                }
            </ContentLoader>
        </div>
    )
}
