import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { PlusButton, ScrollXArrow } from '@component/ui'
import { ViewImgCarouselItem } from '@component/ui/item'
import * as ModalGroup from './index-group'
import { modalAnimationEnum } from '@/config'
import { useAppSelector } from '@/lib/hook/redux'
import { EventMiddleware } from '@/lib/middleware'

interface Props {
}


export const ImgCarousel: React.FC<Props> = ({ }: Props) => {
    const [value, setValue] = React.useState('')
    const { session } = useAppSelector(state => state.session)
    const ref = React.useRef<null | HTMLDivElement>(null)

    const event = EventMiddleware()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const img = getHTMLData(e, false, 'value')
        event({ type: 'view-img', payload: { img: process.env.SERVER_HOST_STORAGE + img } }, () => {
            setValue(img)
        })
    }

    const scroll = React.useCallback((value: number) => {
        if (ref.current)
            ref.current.scrollTo({
                top: 0,
                left: ref.current.scrollLeft + value,
            })
    }, [])

    return (
        <div className="relative bg-color w-11/12 h-[140px] p-5 pb-0 rounded-md translate-y-[250%] flex gap-5" onClick={(e) => { stopPropagation(e); clickHandler(e) }}>
            <div className="flex justify-between fixed h-full w-full -translate-x-5 top-0 z-10 pointer-events-none child-fill-event">
                <ScrollXArrow fn={scroll} plus />
                <ScrollXArrow fn={scroll} plus={false} />
            </div>
            <div ref={ref} className="flex w-full gap-5 overflow-x-scroll px-[40px]">
                {session?.imgs &&
                    (session.imgs).slice(1).split(',').map(item => {
                        return <ViewImgCarouselItem
                            path={item}
                            key={item}
                            isActive={value == item}
                        />
                    })
                }
                <ModalGroup.Root
                    modal={ModalGroup.PushImg}
                    animation={modalAnimationEnum['modal-dft']}
                >
                    <PlusButton className='min-w-[120px] h-full' />
                </ModalGroup.Root>
            </div>
        </div>
    )
}
