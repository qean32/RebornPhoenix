import React from 'react'
import ContentLoader from 'react-content-loader'
import { CommentSceleton } from './item'

interface Props {
}


export const CommentsSceleton: React.FC<Props> = ({ }: Props) => {
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
                Array(3).fill().map((_, i) => {
                    return <CommentSceleton y={i * 100} />
                })
            }
        </ContentLoader>
    )
}
