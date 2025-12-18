import React from 'react'
import { Stage, Layer, Group } from "react-konva"
import { CharacterDM, EntityDM, GameBackground, ObjectDM } from '@component/ui/area';
import { useAppSelector } from '@lib/castom-hook/redux';
import { useStage } from '@lib/castom-hook';

interface Props {
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData } } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()


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
            width={window.innerWidth}
            height={window.innerHeight - 64}
            draggable
        >
            <Layer>
                <Group>
                    <GameBackground />
                </Group>
                {!!mapsData[currentMap ? currentMap.id : 'null']?.queue?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.queue.map((item) => {
                        return <EntityDM {...item} key={item.id} />
                    })
                }
                {!!mapsData[currentMap ? currentMap.id : 'null']?.objects?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.objects.map((item) => {
                        return <ObjectDM {...item} key={item.id} />
                    })
                }
                {!!mapsData[currentMap ? currentMap.id : 'null']?.characters?.length &&
                    mapsData[currentMap ? currentMap.id : 'null']?.characters.map((item) => {
                        return <CharacterDM {...item} key={item.id} />
                    })
                }
            </Layer>
        </Stage>
    )
}