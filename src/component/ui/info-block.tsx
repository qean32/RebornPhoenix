import React from 'react'
import { InfoImage } from './info-image'
import { useHandlerScrollBetween } from '@/lib/hook'
import { infoBlockContentType } from '@/model'
import { useAnchorThrow } from '@/lib/hook/throw'

interface Props {
    title: string
    content: infoBlockContentType,
    id: number
}


export const InfoBlock: React.FC<Props> = React.memo(({
    content,
    title,
    id
}: Props) => {
    const { boolean, refHandler } = useHandlerScrollBetween()
    const [_, swap] = useAnchorThrow()
    React.useEffect(() => {
        if (boolean) {
            swap(title)
        }
    }, [boolean])

    return (
        <div className='pt-20' ref={refHandler} id={id.toString()}>
            <p className="text-3xl uppercase">{title}</p>
            {content.map(item => {
                return (
                    <React.Fragment key={item.text}>
                        {item.subTitle && <p className="text-2xl uppercase pt-5 pb-2">{item.subTitle}</p>}
                        <p className='text-md text-justify'>
                            {item.text}
                        </p>
                        {item.image &&
                            <InfoImage path={item.image} />
                        }
                    </React.Fragment>
                )
            })}
        </div>
    )
})
