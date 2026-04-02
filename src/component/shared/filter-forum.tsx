import React from 'react'
import { Button, DatePickerInFilter, PushTagInFilter } from '@component/ui'
import { Link } from 'react-router-dom'
import { useFilterThrow } from '@/lib/hook/throw'

interface Props {
}


export const FilterForum: React.FC<Props> = () => {
    const [_, clear] = useFilterThrow()

    return (
        <form className="w-2/6 min-w-[310px] max-w-2/6 h-fit flex-1 mt-6 rounded-md bg-color-dark p-5">
            <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
            <DatePickerInFilter />

            <PushTagInFilter
                className="pt-5"
            />

            <div className='flex justify-between pt-20'>
                <Button
                    onClick={() => clear({ date: "", tags: "" })}
                    type='reset'
                    variant='default'
                >
                    <p>Сбросить</p></Button>

                <div className='w-fit'><Link to={'/create-post'}>
                    <Button className='px-2'><img src='/icon/edit.svg' /></Button></Link></div>
            </div>
        </form>
    )
}
