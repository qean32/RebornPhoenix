import React from 'react'
import { Group, Image, Text } from 'react-konva'
import useImage from 'use-image';
import { useAppSelector } from '@lib/castom-hook/redux';
import { useGrid } from '@/lib/castom-hook';

interface Props {
}


export const GameBackground: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap } } = useAppSelector(state => state.session)
    const [bgGameArea] = useImage(currentMap?.path ?? '', 'anonymous');

    if (!currentMap) {
        return <Text fontSize={160} fill={'white'} text="У ВАС НЕТ ИГРОВЫХ ПОЛЕЙ!" />
    }
    const { param: grid } = useGrid()
    console.log(Boolean(grid));
    const [chart] = useImage('/icon/chart.png')


    return (
        <Group>
            <Image
                image={chart}
                x={0}
                y={0}
                width={bgGameArea?.width}
                height={bgGameArea?.height}
                cornerRadius={[10, 10, 10, 10]}
            />
            <Image
                image={bgGameArea}
                x={0}
                y={0}
                cornerRadius={[10, 10, 10, 10]}
            />
        </Group>
    )
}
