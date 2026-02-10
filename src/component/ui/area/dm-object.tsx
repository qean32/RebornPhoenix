import { useDMObject } from '@/lib/hook/area'
import { useAppDispatch } from '@/lib/hook/redux'
import { objectInterface } from '@/model'
import React from 'react'
import { Image } from 'react-konva'
import { utils } from './utils'

interface Props extends objectInterface {
}


export const ObjectDM: React.FC<Props> = (props: Props) => {
    const dispath = useAppDispatch()
    const {
        clickHandler,
        dragEndHandler,
        dragMoveHandler,
        dragStartHandler,
        image,
        mouseOutHandler,
        mouseOverHandler,
    } = useDMObject(dispath, props.path)
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])

    return (
        <>
            <Image
                visible={props.status != 'hidden'}
                {...props.position}
                id={props.id.toString()}
                scale={{ y: scale, x: scale }}
                onClick={clickHandler}
                onDragEnd={dragEndHandler}
                onDragStart={dragStartHandler}
                onMouseOut={mouseOutHandler}
                onMouseOver={mouseOverHandler}
                onDragMove={dragMoveHandler}
                draggable={true}
                image={image}
            />
        </>
    )
}
