import { contentLoaderProps } from '@/config'
import React from 'react'
import ContentLoader from 'react-content-loader'

interface Props {
}


export const ShopItemSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            width='100%'
            height='400px'
            className='px-6'
            {...contentLoaderProps}
        >
            <rect x="0" y={0} width="260" height="45" />
            {
                // @ts-ignore
                Array(3).fill().map((_, i) => {
                    return <React.Fragment key={i}>
                        <rect x={0} y={(i * 110) + 70} width="170" height="90" />
                        <rect x={200} y={(i * 110) + 70} width="170" height="90" />
                        <rect x={400} y={(i * 110) + 70} width="170" height="90" />
                        <rect x={600} y={(i * 110) + 70} width="170" height="90" />
                        <rect x={800} y={(i * 110) + 70} width="170" height="90" />
                    </React.Fragment>
                })
            }
        </ContentLoader>
    )
}
