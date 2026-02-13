import React from 'react'
import { Circle, Group } from "react-konva"
import { entityInterface } from '@/model';
import { Dead, Gray, utils } from './utils';
import { useSubscriber } from '@/lib/hook/area';


export const CharacterSubscriber: React.FC<Omit<entityInterface, 'description'>> = (props: Omit<entityInterface, 'description'>) => {
    const { image, mouseOutHandler, mouseOverHandler, clickHandler, _position, rectRef } = useSubscriber(
        // @ts-ignore
        props.position,
        props.path,
        'more-entity',
        0
    )
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])

    return (
        <Group
            id={props.id.toString()}
            visible={props.status != 'hidden'}
            ref={rectRef}
            {..._position}
            onMouseOver={mouseOverHandler}
            onClick={clickHandler}
            onMouseOut={mouseOutHandler}
        >
            <Circle
                {...utils.restObject}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{ y: scale, x: scale }}
            />
            {props.status == 'dead' && <Gray image={image} size={props.size} />}
            {props.status == 'dead' && <Dead size={props.size} />}
        </Group>
    )
}