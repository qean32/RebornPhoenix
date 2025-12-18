import { nameProject, slogan } from '@/export'
import React from 'react'

interface Props {
}


export const MainBanner: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="relative">
            {/* <img src="/img/carousel-item-3.jpg" className="w-full bg-shadow" alt="" /> */}
            <div className="bg-img bg-shadow h-[95vh]" style={{ backgroundImage: `url("/img/main-bg-1.jpg")`, backgroundAttachment: 'fixed' }} ></div>
            <div className="absolute flex flex-col justify-center items-center inset-0">
                <div className="text-center">
                    <p className="text-9xl text-red-800 translate-x-1">D&D</p>
                    <p className="text-2xl">{nameProject}</p>
                    <p className="text-2xl">{slogan}</p>
                </div>
            </div>
        </div>
    )
}
