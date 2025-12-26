import React from 'react'
import { Stage, Layer } from "react-konva"
import { CharacterSubscriber, EntitySubscriber, GameBackground, ObjectSubscriber } from '@component/ui/area';
import { useAppSelector } from '@lib/castom-hook/redux';
import { useStage, useWindowSize } from '@lib/castom-hook';

interface Props {
}


export const GameAreaSubscriber: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData } } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()
    const { innerHeight, innerWidth } = useWindowSize()


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
                {!!mapsData[currentMap ? currentMap.id : 'null']?.characters?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.characters.map((item) => {
                        return <CharacterSubscriber {...item} key={item.id} />
                    })
                }
                {!!mapsData[currentMap ? currentMap.id : 'null']?.objects?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.objects.map((item) => {
                        return <ObjectSubscriber {...item} key={item.id} />
                    })
                }
            </Layer>
        </Stage>
    )
}