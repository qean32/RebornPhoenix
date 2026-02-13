import React from 'react'
import ContentLoader from 'react-content-loader'
import { PostSceleton } from './item'
import { contentLoaderProps } from '@/config'

interface Props {
}


export const DepartmentSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            width='100%'
            height='600px'
            {...contentLoaderProps}
        >
            {
                // @ts-ignore
                Array(5).fill().map((_, i) => {
                    return <PostSceleton key={i} y={i * 230} />
                })
            }
        </ContentLoader>
    )
}
