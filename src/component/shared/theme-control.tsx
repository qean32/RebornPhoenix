import React from 'react'
import { getHTMLData, setTheme } from '../../lib/function'
import { themes } from '@/config'

interface Props {
}


export const ThemeControl: React.FC<Props> = React.memo(({ }: Props) => {
    const clickHandler = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setTheme(getHTMLData(e, true))
        }, [])

    return (
        <div className="absolute left-5">
            <span className='theme-control cursor-pointer'><img src="/icon/theme.svg" className='icon-md' alt="" /></span>
            <div className='flex flex-col cursor-pointer bg-color opacity-0 pointer-events-none py-2 rounded-sm transition-300 outline-bg-light' onClick={clickHandler}>
                <div className='transition-300 px-3 p-1 bg-color-dark-hover' data={JSON.stringify(themes.darkLight)}>По умолчанию</div>
                <div className='transition-300 px-3 p-1 bg-color-dark-hover' data={JSON.stringify(themes.dark)}>Темная</div>
                <div className='transition-300 px-3 p-1 bg-color-dark-hover' data={JSON.stringify(themes.wood)}>Дерево</div>
            </div>
        </div>
    )
})
