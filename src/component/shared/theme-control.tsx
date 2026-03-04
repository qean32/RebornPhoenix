import React from 'react'
import { cn, getHTMLData, setTheme } from '../../lib/function'
import { themes } from '@/config'
import { useBoolean } from '@/lib/hook'

interface Props {
}


export const ThemeControl: React.FC<Props> = React.memo(() => {
    const clickHandler = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setTheme(getHTMLData(e, true))
            swap()
        }, [])
    const { boolean, swap } = useBoolean()

    return (
        <div className="absolute left-4 pointer-events-none">
            <span
                className='opacity-80 hover:opacity-100 transition-100 w-fit cursor-pointer pointer-events-auto'
                onClick={swap}
            >
                <img src="/icon/theme.svg" className='icon-md' alt="" />
            </span>
            <div
                className={cn('flex flex-col cursor-pointer bg-color py-1 rounded-sm transition-100 outline-bg-light', (!boolean ? "opacity-0 pointer-events-none" : "pointer-events-auto"))}
                onClick={clickHandler}
            >
                <div className='transition-100 px-3 p-1 bg-color-dark-hover pr-5' data={JSON.stringify(themes._)}>По умолчанию</div>
                <div className='transition-100 px-3 p-1 bg-color-dark-hover pr-5' data={JSON.stringify(themes.__)}>Темная</div>
                <div className='transition-100 px-3 p-1 bg-color-dark-hover pr-5' data={JSON.stringify(themes.wood)}>Дерево</div>
            </div>
        </div>
    )
})
