import React from 'react'
import { getSizeInPixel } from '@/lib/function'
import { Circle } from 'react-konva'
import useImage from 'use-image'

interface Props {
    size: 1 | 2 | 3 | 4
}


export const Hidden: React.FC<Props> = ({ size }: Props) => {
    const [chart] = useImage('/icon/chart.png')

    return (
        <Circle
            radius={chart ? (chart?.height > chart.width ? chart.width : chart.height) / 2 : 0}
            rotation={-45}
            fillPatternImage={chart}
            fillPatternX={chart ? -chart?.width / 2 : 0}
            fillPatternY={chart ? -chart?.height / 2 : 0}
            scale={{
                y: chart ? ((getSizeInPixel(size) / 2) / ((chart?.height > chart.width ? chart.width : chart.height) / 2)) : 0,
                x: chart ? ((getSizeInPixel(size) / 2) / ((chart?.height > chart.width ? chart.width : chart.height) / 2)) : 0,
            }}
        />
    )
}
