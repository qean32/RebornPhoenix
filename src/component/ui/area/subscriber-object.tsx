import { objectInterface } from '@/model'
import React from 'react'
import { Image } from 'react-konva'
import { utils } from './utils'
import { useSubscriber } from '@/lib/hook/area'

interface Props extends objectInterface {
}


export const ObjectSubscriber: React.FC<Props> = (props: Props) => {
    const { image, mouseOutHandler, mouseOverHandler, clickHandler, _position, rectRef } = useSubscriber(
        // @ts-ignore
        props.position,
        props.path,
        'more-object',
        0
    )
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])

    return (
        <>
            <Image
                visible={props.status != 'hidden'}
                {..._position}
                ref={rectRef}
                id={props.id.toString()}
                scale={{ y: scale, x: scale }}
                image={image}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
                onClick={clickHandler}
            />
        </>
    )
}
