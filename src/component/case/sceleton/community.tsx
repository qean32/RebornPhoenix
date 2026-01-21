import React from 'react'
import { UserSceleton } from './item/user'
import ContentLoader from 'react-content-loader'

interface Props {
}


export const CommunitySceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <ContentLoader
            speed={3}
            width='100%'
            height='600px'
            backgroundColor="#0c0c0c"
            foregroundColor="#0e0e0e"
            className='flex gap-3'
        >
            {
                // @ts-ignore
                Array(8).fill().map((_, i) => {
                    return <UserSceleton y={i * 100} />
                })
            }
        </ContentLoader>
    )
}
