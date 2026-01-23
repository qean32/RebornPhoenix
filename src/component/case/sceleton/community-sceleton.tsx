import React from 'react'
import { UserSceleton } from './item'
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
