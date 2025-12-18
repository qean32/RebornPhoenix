import React from 'react'

interface Props {
}


export const DangerIcon: React.FC<Props> = ({ }: Props) => {
    return (
        <img src="/icon/info.svg" className='icon-sm cursor-pointer' alt="" />
    )
}
