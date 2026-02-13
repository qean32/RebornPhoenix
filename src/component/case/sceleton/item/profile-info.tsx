import { contentLoaderProps } from '@/config'
import React from 'react'
import ContentLoader from 'react-content-loader'

interface Props {
}


export const ProfileInfoSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            width='100%'
            height='90px'
            className='mt-4'
            {...contentLoaderProps}
        >
            <circle cx="45" cy="45" r="40" />
            <rect x="110" y="15" rx="" ry="" width="105" height="50" radius='100%' />
        </ContentLoader>
    )
}
