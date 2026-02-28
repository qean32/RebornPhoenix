import React from 'react'
import { Stage, Layer } from "react-konva"
import { EntityDM } from '@component/ui/area/dm-entity';
import { ObjectDM } from '@component/ui/area/dm-object';
import { GameBackground } from '@component/ui/area/game-background';
import { useAppSelector } from '@lib/hook/redux';
import { useStage } from '@lib/hook/use-stage';
import { useEventListenDM } from '@lib/hook/use-event-listen-dm';
import { useWindowSize } from '@lib/hook/use-window-size';
import { MainLoader } from '@component/shared/main-loader';

interface Props {
}


const GameArea: React.FC<Props> = ({ }: Props) => {
    const { session: { currentMap, mapsData }, isSet } = useAppSelector(state => state.session)
    const { handleWheel, stage } = useStage()
    const { innerHeight, innerWidth } = useWindowSize()
    useEventListenDM()

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
            </Layer>
        </Stage>
    )
}

export default GameArea