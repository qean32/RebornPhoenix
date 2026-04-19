import React, { useCallback, useState } from 'react'
import { Modal } from '@/component/master/hoc'
import { useCropThrow } from '@/lib/hook/throw'
import Cropper from 'react-easy-crop'
import { Button } from '@/component/ui'
import getCroppedImg from '@/lib/function/crop'
import { stopPropagation } from '@/lib/function'
import { modalAnimationEnum } from '@/config'

interface Props {
}


export const CropImg: React.FC<Props> = () => {
    const [blob, _, clear] = useCropThrow()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(blob, croppedAreaPixels)
            console.log(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <Modal
            swap={() => { }}
            view={!!blob}
            animation={modalAnimationEnum['modal-dft']}
        >
            <div className="bg-color w-1/3 h-6/12 rounded-md flex flex-col overflow-hidden" onClick={stopPropagation}>
                <div className="h-9/12 relative">
                    <Cropper
                        image={blob}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className="p-5 flex gap-3 justify-end items-end h-3/12">
                    <Button variant='reject' onClick={clear}>Отмена</Button>
                    <Button onClick={showCroppedImage}>Обрезать</Button>
                </div>
            </div>
        </Modal >
    )
}
