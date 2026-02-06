import React from 'react'
import { Circle, Group } from "react-konva"
import { useDMCharacter } from '@lib/hook/area';
import { characterDto } from '@/model';
import { useAppDispatch } from '@lib/hook/redux';
import { Dead, Gray, Hidden, utils } from './utils';

type Props = {
    action?: boolean
} & characterDto

export const CharacterDM: React.FC<Props> = (props: Props) => {
    const dispath = useAppDispatch()
    const {
        clickHandler,
        dragEndHandler,
        dragStartHandler,
        mouseOutHandler,
        mouseOverHandler,
        dragMoveHandler,
        image,
        rectRef
    } = useDMCharacter(dispath, props.path)
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])

    return (
        <Group
            id={props.id.toString()}
            ref={rectRef}
            draggable={true}
            {...props.position}
            onClick={clickHandler}
            onDragEnd={dragEndHandler}
            onDragStart={dragStartHandler}
            onMouseOut={mouseOutHandler}
            onMouseOver={mouseOverHandler}
            onDragMove={dragMoveHandler}
        >
            <Circle
                {...utils.restObject}
                {...props.action && utils.restQueue}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{ y: scale, x: scale }}
            />
            {(props.status == 'dead' || props.status == 'hidden') &&
                <Gray image={image} size={props.size} />}
            {props.status == 'hidden' && <Hidden size={props.size} />}
            {props.status == 'dead' && <Dead size={props.size} />}
        </Group>
    )
}