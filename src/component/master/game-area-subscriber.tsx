import React from 'react'
import { Stage, Layer } from "react-konva"
import { EntitySubscriber, GameBackground, ObjectSubscriber } from '@component/ui/area';
import { useAppSelector } from '@lib/hook/redux';
import { useEventListen, useStage, useWindowSize } from '@lib/hook';
import { MainLoader } from '../shared';

interface Props {
}


export const GameAreaSubscriber: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData }, isSet } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()
    const { innerHeight, innerWidth } = useWindowSize()
    useEventListen()

    if (!isSet) {
        return <MainLoader infinity />
    }


    return (
        <Stage
            onWheel={handleWheel}
            scaleX={stage.scale}
            scaleY={stage.scale}
            x={stage.x}
            y={stage.y}
            onDragMove={() => { }}
            onDragEnd={() => { }}
            onDragStart={() => { }}
            width={innerWidth}
            height={innerHeight - 64}
            draggable
        >
            <Layer>
                <GameBackground />
                {!!mapsData[currentMap ? currentMap.id : 'null']?.queue?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.queue.map((item) => {
                        return <EntitySubscriber {...item} key={item.id} />
                    })
                }
                {/* {!!mapsData[currentMap ? currentMap.id : 'null']?.characters?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.characters.map((item) => {
                        return <CharacterSubscriber {...item} key={item.id} />
                    })
                } */}
                {!!mapsData[currentMap ? currentMap.id : 'null']?.objects?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.objects.map((item) => {
                        return <ObjectSubscriber {...item} key={item.id} />
                    })
                }
            </Layer>
        </Stage>
    )
}