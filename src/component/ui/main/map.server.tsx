'use server'

import React from 'react'

interface Props {
}


export const Map: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex justify-center items-center pb-10">
            <div className="w-8/12 h-[700px] bg-top bg-cover bg-shadow relative rounded-sm" style={{ backgroundImage: `url(/img/map2.jpg)` }}></div>
            <div className="w-8/12 h-[700px] absolute left-1/2 -translate-x-1/2">
                <div className="w-[75px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-1 cursor-pointer"
                    style={{ backgroundImage: `url(/img/f/entity6.jpg)` }}>
                </div>
                <div className="w-[75px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-2 cursor-pointer"
                    style={{ backgroundImage: `url(/img/f/entity6.jpg)` }}>
                </div>
                <div className="w-[75px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-3 cursor-pointer"
                    style={{ backgroundImage: `url(/img/f/entity6.jpg)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-4 cursor-pointer"
                    style={{ backgroundImage: `url(/img/f/char1.jpg)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-5 cursor-pointer"
                    style={{ backgroundImage: `url(/img/f/char1.jpg)` }}>
                </div>
            </div>
        </div>
    )
}
