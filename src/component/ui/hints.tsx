import { customMarkup } from '@/export'
import React from 'react'

interface Props {
}


export const Hints: React.FC<Props> = React.memo(({ }: Props) => {
    return (
        <>
            <p className='text-4xl mt-5'>ПОДСКАЗКА</p>
            <div className="py-5 grid grid-cols-2 px-1 gap-y-2">
                <p>{customMarkup.h1}</p>
                <p className='text-4xl'>Заголовок</p>
                <p>{customMarkup.h2}</p>
                <p className='text-3xl'>Заголовок</p>
                <p>{customMarkup.h3}</p>
                <p className='text-2xl'>Заголовок</p>
                <p>{'"без обозначения"'}</p>
                <p>Стандартный текст</p>
                <p>{customMarkup.small}</p>
                <p className='text-sm'>Маленький текст</p>
                <p>{customMarkup.img}</p>
                <p><img src='https://texterra.ru/upload/medialibrary/194/3vct9y4m4urm29bksteml6aosai5n9m1/19.webp' className='w-[200px]' /></p>
                <p>пример</p>
                <p>img:{'{'}https://pathToImg{'}'}</p>
            </div>
            <p className='mt-2 pb-8'>Предупреждение: используйте ссылки, заканчивающиеся на .jpg | .png | .jpeg | .webp и т.д</p>
        </>
    )
})
