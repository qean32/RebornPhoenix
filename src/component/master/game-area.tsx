import React from 'react'
import { Stage, Layer } from "react-konva"
import { CharacterDM, EntityDM, GameBackground, ObjectDM } from '@component/ui/area';
import { useAppSelector } from '@lib/hook/redux';
import { useStage, useWindowSize } from '@lib/hook';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
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
                {!!currentMap && !!mapsData[currentMap ? currentMap.id : 'null']?.queue?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.queue.map((item) => {
                        return (
                            <EntityDM
                                action={mapsData[currentMap ? currentMap.id : 'null']?.queue[0].id == item.id}
                                {...item}
                                key={item.id}
                            />
                        )
                    })
                }
                {!!currentMap && !!mapsData[currentMap ? currentMap.id : 'null']?.objects?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.objects.map((item) => {
                        return <ObjectDM
                            {...item}
                            key={item.id}
                        />
                    })
                }
                {!!currentMap && !!mapsData[currentMap ? currentMap.id : 'null']?.characters?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.characters.map((item) => {
                        return <CharacterDM
                            action={mapsData[currentMap ? currentMap.id : 'null']?.queue[0].id == item.id}
                            {...item}
                            key={item.id}
                        />
                    })
                }
            </Layer>
        </Stage>
    )
}