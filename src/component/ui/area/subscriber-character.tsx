import React from 'react'
import { Circle, Group } from "react-konva"
import { characterInterface } from '@/model';
import { Dead, Gray, Hidden, utils } from './utils';
import { useSubscriberEntity } from '@/lib/hook/area';
import { useAppDispatch } from '@/lib/hook/redux';


export const CharacterSubscriber: React.FC<characterInterface> = (props: characterInterface) => {
    const dispath = useAppDispatch()
    const { image, mouseOutHandler, mouseOverHandler, clickHandler } = useSubscriberEntity(dispath, props.path, 'more-character')
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])


    return (
        <Group
            id={props.id.toString()}
            {...props.position}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
            onClick={clickHandler}
        >
            <Circle
                {...utils.restObject}
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