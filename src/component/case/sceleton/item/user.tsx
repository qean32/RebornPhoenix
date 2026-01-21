import React from 'react'

interface Props {
    y: number
}


export const UserSceleton: React.FC<Props> = ({ y }: Props) => {
    return (
        <rect x="0" y={y} width="100%" height="80" />
    )
}
