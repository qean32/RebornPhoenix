import React from 'react'
import { useBoolean } from '@/lib/castom-hook'
import { cn } from '@/lib/function'
import { UnwrapTags } from '@component/ui'
import { useFormContext } from 'react-hook-form'
import { tagsArray } from '@/export'

interface Props {
    className?: string
    name: string
}


export const PushTagInForm: React.FC<Props> = ({
    className,
    name = '',
}: Props) => {
    const [tags, setTags] = React.useState<string>('')
    const { boolean: view, swap } = useBoolean()
    const { setValue } = useFormContext()
    React.useEffect(() => {
        setValue(name, '')
    }, [])

    const clickHandlerPush = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            {
                const tags = `${prev.split(',').filter(item => item != tag).join(',')},${tag}`
                setValue(name, tags)

                return tags
            }
        })

        swap()
    }

    const clickHandlerRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const tag = e.target.innerHTML
        setTags(prev => {
            {
                const tags = `${prev.split(',').filter(item => item != tag).join(',')}`
                setValue(name, tags)

                return tags
            }
        })
    }

    return (
        <div className={cn('flex w-full flex-col gap-2 cursor-pointer relative z-20', className)}>
            <div onClick={swap} className='w-fit'>Теги</div>

            <div
                className={cn("pointer-events-none transition-300 origin-top", (!!tags.length ? 'h-[50px]' : 'opacity-0 scale-y-0 h-[0px]'))}
                onClick={clickHandlerRemove}
            ><UnwrapTags
                    className='z-50 bg-color-dark px-2'
                    tags={tags} /></div>

            <input type="text"
                value={tags}
                onChange={() => { }}
                hidden
            />

            {
                view &&
                <div className="pointer-events-none absolute bottom-0 translate-y-[120%]" onClick={clickHandlerPush}>
                    <UnwrapTags className='z-50 bg-color-dark px-2' tags={tagsArray.join(',')} />
                </div>
            }
        </div>
    )
}
