import React from 'react'

interface Props {
}


export const Map: React.FC<Props> = () => {
    return (
        <div className="flex justify-center items-center pb-10 flex-col">
            <div className="w-[1340px] h-[750px] bg-top bg-cover bg-shadow relative rounded-sm" style={{ backgroundImage: `url(/img/map2.jpg)` }}></div>
            <div className="w-[1340px] h-[750px] absolute left-1/2 -translate-x-1/2">
                <p className='uppercase m-3'>Игровой процесс</p>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-1 cursor-pointer"
                    style={{ backgroundImage: `url(/img/enemy1.jpg)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-2 cursor-pointer"
                    style={{ backgroundImage: `url(/img/enemy1.jpg)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-3 cursor-pointer"
                    style={{ backgroundImage: `url(/img/enemy2.webp)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-4 cursor-pointer"
                    style={{ backgroundImage: `url(/img/char1.jpg)` }}>
                </div>
                <div className="w-[70px] aspect-square bg-img rounded-full absolute z-10 fake-token fake-token-5 cursor-pointer"
                    style={{ backgroundImage: `url(/img/char2.jpg)` }}>
                </div>
            </div>
        </div>
    )
}
