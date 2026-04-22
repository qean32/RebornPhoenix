import { CropImg } from "@/component/widget/modal/crop-img"
import { blobFile, cn, generateId } from "@/lib/function"
import React from "react"

interface Props {
    className?: string
    labelClass?: string
    name: string
    defaultValue: string
}


export const CropImgInput: React.FC<Props> = ({ className, labelClass, name, defaultValue }: Props) => {
    const [url, setUrl] = React.useState()
    const [blob, setBlob] = React.useState<string>("")
    const id = generateId().toString()
    const clearBlob = React.useCallback(() => setBlob(""), [])
    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setBlob(await blobFile(e.target.files[0]))
        }
    };

    return (
        <>
            <div className={cn('w-fit', className)}>
                <label
                    htmlFor={id}
                    className={cn(
                        'cursor-pointer bg-img aspect-square rounded-full flex justify-center items-center',
                        labelClass
                    )}
                    style={{ backgroundImage: `url(${url ?? defaultValue})` }}
                >
                    {!url && <img src="/icon/upload-aim.svg" alt="" className="icon-lg" />}
                </label>
                <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' id={id} className='d-none' onChange={changeHandler} />
            </div>
            <CropImg clear={clearBlob} name={name} blob={blob} setUrl={setUrl} />
        </>
    )
}
