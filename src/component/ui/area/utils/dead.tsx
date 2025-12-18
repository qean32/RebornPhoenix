import React from 'react'
import { getSizeInPixel } from '@/lib/function'
import { Circle } from 'react-konva'
import useImage from 'use-image'

interface Props {
    size: 1 | 2 | 3 | 4
}


export const Dead: React.FC<Props> = ({ size }: Props) => {
    const [dead] = useImage('/icon/dead.png')

    return (
        <Circle
            radius={dead ? (dead?.height > dead.width ? dead.width : dead.height) / 1.88 : 0}
            fillPatternImage={dead}
            fillPatternX={dead ? -dead?.width / 2 : 0}
            fillPatternY={dead ? -dead?.height / 2 : 0}
            scale={{
                y: dead ? ((getSizeInPixel(size) / 2) / ((dead?.height > dead.width ? dead.width : dead.height) / 2)) * 0.8 : 0,
                x: dead ? ((getSizeInPixel(size) / 2) / ((dead?.height > dead.width ? dead.width : dead.height) / 2)) * 0.8 : 0,
            }}
        />
    )
}
