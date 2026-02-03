import React from 'react'

interface Props {
}


export const Map: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="flex justify-center items-center pb-10 flex-col">
            <div className="w-[1340px] h-[750px] bg-top bg-cover bg-shadow relative rounded-sm" style={{ backgroundImage: `url(/img/map2.jpg)` }}></div>
            <div className="w-[1340px] h-[750px] absolute left-1/2 -translate-x-1/2">
                <p className='uppercase m-3'>Игровой процесс</p>
                <div className="w-[85px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-1 cursor-pointer"
                    style={{ backgroundImage: `url(/img/rogue.jpg)` }}>
                </div>
                <div className="w-[85px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-2 cursor-pointer"
                    style={{ backgroundImage: `url(/img/rogue.jpg)` }}>
                </div>
                <div className="w-[85px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-3 cursor-pointer"
                    style={{ backgroundImage: `url(/img/rogue.jpg)` }}>
                </div>
                <div className="w-[65px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-4 cursor-pointer"
                    style={{ backgroundImage: `url(/img/character.jpg)` }}>
                </div>
                <div className="w-[65px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-5 cursor-pointer"
                    style={{ backgroundImage: `url(/img/character.jpg)` }}>
                </div>
            </div>
        </div>
    )
}
