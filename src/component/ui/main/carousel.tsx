import React from 'react'

interface Props {
}


export const Carousel: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="overflow-hidden mount-opacity">
            <div className="w-[200%] carousel py-4 bg-color-darkness h-[140px]">
                <div className="w-full flex justify-around child-pointer h-full">
                    <img src="/img/carousel-item-1.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-2.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-3.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-4.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-5.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-6.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-7.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                </div>
                <div className="w-full flex justify-around child-pointer h-full">
                    <img src="/img/carousel-item-1.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-2.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-3.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-4.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-5.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-6.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-7.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                    <img src="/img/carousel-item-1.jpg" className='h-full bg-hover-shadow rounded-sm' alt="" />
                </div>
            </div>
        </div>
    )
}
