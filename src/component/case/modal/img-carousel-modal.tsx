import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { PlusButton, ScrollXArrow } from '@component/ui'
import { ViewImgCarouselItem } from '@component/ui/item'
import * as ModalGroup from './index-group'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const ImgCarousel: React.FC<Props> = ({ view, swap }: Props) => {
    const [value, setValue] = React.useState('/img/carousel-item-1.jpg')
    const ref = React.useRef<null | HTMLDivElement>(null)

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setValue(getHTMLData(e, false, 'value'))
    }

    const scroll = (value: number) => {
        if (ref.current)
            ref.current.scrollTo({
                top: 0,
                left: ref.current.scrollLeft + value,
            })
    }

    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open-bottom',
                close: 'modal-close-bottom'
            }}
        >
            <div className="relative bg-color w-11/12 h-[140px] p-5 pb-0 rounded-md translate-y-[280%] flex gap-5" onClick={(e) => { stopPropagation(e); clickHandler(e) }}>
                <div className="flex justify-between fixed h-full w-full -translate-x-5 top-0 z-10 pointer-events-none child-fill-event">
                    <ScrollXArrow fn={scroll} plus />
                    <ScrollXArrow fn={scroll} plus={false} />
                </div>
                <div ref={ref} className="flex w-full gap-5 overflow-x-scroll px-[40px]">
                    <ViewImgCarouselItem path='/img/carousel-item-1.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-2.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-3.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-4.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-5.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-6.jpg' value={value} />
                    <ViewImgCarouselItem path='/img/carousel-item-7.jpg' value={value} />
                    <ModalGroup.Root modal={ModalGroup.PushImg}>
                        <PlusButton className='min-w-[120px] h-full' />
                    </ModalGroup.Root>
                </div>
            </div>
        </Modal>
    )
}
