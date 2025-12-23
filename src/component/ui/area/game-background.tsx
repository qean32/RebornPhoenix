import React from 'react'
import { Image, Text } from 'react-konva'
import useImage from 'use-image';
import { useAppSelector } from '@lib/castom-hook/redux';

interface Props {
}


export const GameBackground: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap } } = useAppSelector(state => state.session)
    const [bgGameArea] = useImage(currentMap?.path ?? '', 'anonymous');

    if (!currentMap) {
        return <Text fontSize={160} fill={'white'} text="У ВАС НЕТ ИГРОВЫХ ПОЛЕЙ!" />
    }

    return <Image
        image={bgGameArea}
        x={0}
        y={0}
        cornerRadius={[10, 10, 10, 10]}
    />;
}
