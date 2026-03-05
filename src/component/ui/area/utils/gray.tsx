import React from 'react'
import { getSizeInPixel } from '@/lib/function'
import { Circle } from 'react-konva'
import useImage from 'use-image'
import { sizeType } from '@/model'

interface Props {
    image: ReturnType<typeof useImage> | any
    size: sizeType
}


export const Gray: React.FC<Props> = ({ image, size }: Props) => {

    return (
        <Circle
            fillPatternRepeat='no-repeat'
            strokeWidth={0}
            stroke="#1f1f1f"
            radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
            opacity={.7}
            fill={'#1f1f1f'}
            scale={{
                y: image ? ((getSizeInPixel(size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
                x: image ? ((getSizeInPixel(size) / 2) / ((image?.height > image.width ? image.width : image.height) / 2)) : 0,
            }}
        />
    )
}
