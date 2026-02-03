import React from 'react'
import { Title } from './title'
import { SelectImgItem } from './item'
import { getHTMLData } from '@/lib/function'
import { useFormContext } from 'react-hook-form'

interface Props {
}


export const SelectSessionBG: React.FC<Props> = ({ }: Props) => {
    const [value, setValue] = React.useState('/img/carousel-item-1.jpg')
    const { setValue: setValueForm } = useFormContext()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setValue(getHTMLData(e, false, 'value'))
        setValueForm('path', getHTMLData(e, false, 'value'))
    }
    return (
        <>
            <Title className='pb-4'>Фон плитки</Title>
            <div className="flex flex-wrap gap-5 max-w-[660px] pointer-events-none child-fill-event" onClick={clickHandler}>
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-1.jpg' value={value} />
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-2.jpg' value={value} />
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-3.jpg' value={value} />
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-4.jpg' value={value} />
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-5.jpg' value={value} />
                <SelectImgItem className='w-1/8 min-w-[150px] h-[85px]' path='/img/carousel-item-6.jpg' value={value} />
            </div>
        </>
    )
}
