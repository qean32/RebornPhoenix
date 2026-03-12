import React from 'react'
import { cn, generateId } from '@lib/function'
import { useBoolean } from '@lib/hook';
import { useFormContext } from 'react-hook-form';

interface Props {
    className?: string
    labelClass?: string
    name: string
    iconSize?: 'icon-2xl' | 'icon-lg'
}


export const UploadImgArea: React.FC<Props> = ({
    className,
    name,
    labelClass = "p-0 h-full rounded-lg",
    iconSize = 'icon-2xl'
}: Props) => {
    const [src, setSrc] = React.useState<File[]>([]);
    const { boolean, off, on } = useBoolean(false)
    const { setValue } = useFormContext()

    const id = generateId().toString()
    const urls = src.map((file: File) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setValue(name, e.target.files[0])
        setSrc([e.target.files[0]])
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        off()
    }
    const dragStartHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        on()
    }
    const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()

        e.dataTransfer.files && setSrc([e.dataTransfer.files[0]])
    }


    return (
        <>
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' hidden id={id} onChange={changeHandler} />
            <div className={cn("", className)}>
                <label
                    className={cn("flex justify-center items-center bg-img bg-color-dark cursor-pointer", labelClass)}
                    htmlFor={id}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragStart={e => dragStartHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => dropHandler(e)}
                    style={{ backgroundImage: `url(${urls[0]})` }}
                >
                    {/* {urls[0] && <img src={urls[0]} alt="" className='w-full rounded-md' />} */}
                    {!urls[0] && (boolean ? <img src='/icon/upload-aim.svg' alt="" className={iconSize} /> : <img src='/icon/upload.svg' alt="" className={iconSize} />)}
                </label>
            </div>
        </>
    )
}
