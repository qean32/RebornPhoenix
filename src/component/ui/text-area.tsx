import React from 'react'
import { cn, generateId } from '../../lib/function'
import { useFormContext } from 'react-hook-form'
import { HoverHint } from '../master/h-order-component'
import { DangerIcon } from '.'
import { separator, separatorLink } from '@/export'

interface Props {
    className?: string
    parentDivclassName?: string
    title: string
    ref?: React.RefObject<HTMLDivElement> | null
    children?: React.ReactNode
    name: string
    convertHTML?: boolean
    initValue?: boolean
}


export const TextArea: React.FC<Props> = ({
    className,
    title,
    ref,
    children,
    name,
    parentDivclassName,
    convertHTML = false,
    initValue = false
}: Props) => {
    const { register, formState: { errors }, setValue, watch } = useFormContext()
    const id = generateId().toString()
    const textError = errors[name]?.message as string;
    React.useEffect(() => {
        if (initValue) {
            setValue(name, children)
        }
    }, [])
    React.useEffect(() => {
        if (!watch(name) && !initValue) {
            // @ts-ignore
            document.getElementById(id).innerHTML = '';
        }
    }, [watch(name)])
    return (
        <div className={cn("relative", parentDivclassName)}>
            {textError &&
                <HoverHint className='top-5 absolute -translate-y-1/2 right-2' text={textError} x={'left'} y={'bottom'} >
                    <DangerIcon />
                </HoverHint>}
            <div
                suppressContentEditableWarning={true}
                contentEditable={true}
                id={id}
                {...register(name)}
                ref={ref}
                onInput={e => {
                    // @ts-ignore
                    const links = e.target.innerHTML.match(/\{(.*?)\}/g)
                    // @ts-ignore
                    const text = e.target.innerHTML.replaceAll('/', '').replaceAll('&nbsp;', '').split('<div>')
                    setValue(name,
                        !convertHTML ?
                            e.currentTarget.textContent
                            :
                            // @ts-ignore
                            `${text.join(separator)}${separatorLink}${links?.join(separator).replaceAll('/', ';')}`
                        , { shouldValidate: true }
                    )
                }}
                // @ts-ignore
                placeholder={title}
                className={cn("outline-0 bg-color-dark w-full rounded-md min-h-[200px]", className)}
            >
                {children}
            </div>
        </div >
    )
}
