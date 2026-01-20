import React from 'react'
import ContentLoader from 'react-content-loader'

interface Props {
}


export const ProfileInfoSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            speed={3}
            width='100%'
            height='90px'
            backgroundColor="#0c0c0c"
            foregroundColor="#0e0e0e"
            className='mt-4'
        >
            <circle cx="45" cy="45" r="35" />
            <rect x="100" y="15" rx="" ry="" width="105" height="55" radius='100%' />
        </ContentLoader>
    )
}
