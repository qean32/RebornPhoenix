import React, { useCallback, useState } from 'react'
import { Modal } from '@/component/master/hoc'
import { Button } from '@/component/ui'
import getCroppedImg from '@/lib/function/crop'
import { stopPropagation } from '@/lib/function'
import { modalAnimationEnum } from '@/config'
import { useFormContext } from 'react-hook-form'
import Cropper from 'react-easy-crop'
import { voidFunction } from '@/model'

interface Props {
    name: string
    blob: string
    setUrl: Function
    clear: voidFunction
}

const DEFAULT_CROP = { x: 0, y: 0 }
const ZOOM_CHANGE = 0.1
export const CropImg: React.FC<Props> = ({ name, setUrl, blob, clear }: Props) => {
    const [crop, setCrop] = useState(DEFAULT_CROP)
    const [zoom, setZoom] = useState(1)
    const { setValue } = useFormContext()   
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const cropHandler = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(blob, croppedAreaPixels)
            fetch(croppedImage).then(async res => {
                const file = new File([await res.blob()], 'rebornPhoenix.png', {
                    type: 'image/png',
                });
                setUrl(croppedImage)
                setValue(name, file)
                clear()
                setCrop(DEFAULT_CROP)
                setZoom(1)
            })
        } catch (e) {
            console.error(e)
            clear()
        }
    }, [croppedAreaPixels])

    const zoomHandler = useCallback((e: number) => {
        if (zoom > e) {
            setZoom(prev => prev - ZOOM_CHANGE)
            return
        }
        setZoom(prev => prev + ZOOM_CHANGE)
    }, [zoom])

    return (
        <Modal
            swap={() => { }}
            view={!!blob}
            animation={modalAnimationEnum['modal-dft']}
        >
            <div className="bg-color w-1/3 h-6/12 rounded-md flex flex-col overflow-hidden p-5" onClick={stopPropagation}>
                <div className="h-9/12 relative">
                    <Cropper
                        image={blob}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={zoomHandler}
                    />
                </div>
                <div className="flex gap-3 justify-end items-end h-3/12">
                    <Button variant='reject' onClick={clear}>Отмена</Button>
                    <Button onClick={cropHandler}>Обрезать</Button>
                </div>
            </div>
        </Modal >
    )
}
