import React from 'react'
import ContentLoader from 'react-content-loader'

interface Props {
}


export const ForumSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="h-100vh">
            <ContentLoader
                speed={3}
                width='100%'
                height='700px'
                backgroundColor="#0c0c0c"
                foregroundColor="#0e0e0e"
            >
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="230" />
                <rect x="0" y="250" rx="5" ry="5" width="100%" height="250" />
                <rect x="0" y="520" rx="5" ry="5" width="100%" height="250" />
            </ContentLoader>
        </div>
    )
}
