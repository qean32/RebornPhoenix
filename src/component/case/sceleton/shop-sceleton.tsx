import React from 'react'
import { ShopItemSceleton } from './item'

interface Props {
}


export const ShopSceleton: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            {
                // @ts-ignore
                Array(2).fill().map((_, i) => {
                    return <ShopItemSceleton key={i} />
                })
            }
        </>
    )
}
