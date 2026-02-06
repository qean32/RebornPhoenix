import React from 'react'
import { useQ } from '@/lib/hook'
import { qpk } from '@/export'

interface Props {
}


export const MapItem: React.FC<Props> = ({ }: Props) => {
    const { pushQ } = useQ(qpk.viewimg)

    const clickHAndler = () => {
        pushQ('/img/carousel-item-1.jpg')
    }
    return (
        <div className="mount-opacity relative h-[9vh] cursor-pointer" onClick={clickHAndler}>
            <div className="h-full w-full absolute top-0 bg-img bg-shadow rounded-sm" style={{ backgroundImage: `url(${'/img/carousel-item-1.jpg'})` }}></div>

            <div className="absolute top-0.5 right-0.5">

            </div>
        </div>
    )
}
