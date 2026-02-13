import React from 'react'
import { Group, Image, Rect, Text } from 'react-konva'
import useImage from 'use-image';
import { useAppSelector } from '@lib/hook/redux';
import { useGrid } from '@/lib/hook';

interface Props {
}


export const GameBackground: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap } } = useAppSelector(state => state.session)

    const [bgGameArea] = useImage(
        // @ts-ignore
        `${process.env.SERVER_HOST}api/static/${currentMap?.path.split('/').at(-1)}/`, 'anonymous');

    const { param: grid } = useGrid()
    const [chart] = useImage('/icon/grid.png')

    if (!currentMap?.path) {
        return <Text fontSize={160} fill={'white'} text="У ВАС НЕТ ИГРОВЫХ ПОЛЕЙ!" />
    }

    return (
        <Group>
            <Image
                image={bgGameArea}
                x={0}
                y={0}
                cornerRadius={[10, 10, 10, 10]}
            />
            {Boolean(grid) &&
                <Rect
                    x={0}
                    y={0}
                    cornerRadius={[10, 10, 10, 10]}
                    fillPatternImage={chart}
                    width={bgGameArea?.width ? bgGameArea?.width : 0}
                    height={bgGameArea?.height ? bgGameArea?.height : 0}
                />
            }
        </Group>
    )
}
