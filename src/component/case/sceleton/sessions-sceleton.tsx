import React from 'react'
import ContentLoader from 'react-content-loader'
import { SessionSceleton } from './item'
import { contentLoaderProps } from '@/export'

interface Props {
}


export const SessionsSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            width='100%'
            height='360px'
            {...contentLoaderProps}
        >
            {
                // @ts-ignore
                Array(3).fill().map((_, i) => {
                    return <SessionSceleton y={i * 110} />
                })
            }
        </ContentLoader>
    )
}
