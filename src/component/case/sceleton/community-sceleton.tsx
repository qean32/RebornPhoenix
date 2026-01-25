import React from 'react'
import { UserSceleton } from './item'
import ContentLoader from 'react-content-loader'
import { contentLoaderProps } from '@/export'

interface Props {
}


export const CommunitySceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            width='100%'
            height='600px'
            {...contentLoaderProps}
        >
            {
                // @ts-ignore
                Array(4).fill().map((_, i) => {
                    return <UserSceleton y={i * 100} />
                })
            }
        </ContentLoader>
    )
}
