import { objectDto } from '@/model'
import React from 'react'
import { Image } from 'react-konva'
import { utils } from './utils'
import { useSubscriber } from '@/lib/hook/area'
import { useAppDispatch } from '@/store'

interface Props extends objectDto {
}


export const ObjectSubscriber: React.FC<Props> = (props: Props) => {
    const dispath = useAppDispatch()
    const { image, mouseOutHandler, mouseOverHandler, clickHandler } = useSubscriber(dispath, props.path, 'more-object')
    const scale = React.useMemo(() => image ? utils.getScale(image.height, image.width, props.size) : 0, [props, image])

    return (
        <>
            <Image
                visible={props.status != 'hidden'}
                {...props.position}
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
