import React from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
    children: React.ReactNode
    name: string
}


export const UploadFilesInCreatePost: React.FC<Props> = ({
    children,
    name
}: Props) => {
    const { setValue, watch } = useFormContext()
    const changeHandlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const arr = Array.from(watch(name) ?? [])

        if (e.target.files) {
            setValue(name, [...arr, ...Array.from(e.target.files)])
        }
    }

    return (
        <>
            <input type="file" hidden multiple id='upload_img_in_post' onChange={changeHandlerFile} />
            <label htmlFor="upload_img_in_post" className='h-full bg-color-dark rounded-sm px-1 translate-x-1'>
                {children}
            </label>
        </>
    )
}
