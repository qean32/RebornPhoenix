import React from 'react'
import { FaqImage } from './faq-image'
import { useHandlerScrollBetween } from '@/lib/castom-hook'
import { qParamName } from '@/export'

interface Props {
    title: string
    pushQ: any
    pushQParam: any
    content: {
        image?: string,
        text: string,
    }[],
    id: number
}


export const FaqBlock: React.FC<Props> = ({
    content,
    title,
    pushQ,
    pushQParam,
    id
}: Props) => {
    const { boolean, refHandler } = useHandlerScrollBetween()
    React.useEffect(() => {
        if (boolean) {
            pushQParam(qParamName.anchorLink, title)
        }
    }, [boolean])

    return (
        <div className='pt-20' ref={refHandler} id={id.toString()}>
            <p className="text-3xl uppercase">{title}</p>
            {content.map(({ text, image }) => {
                return (
                    <>
                        <p className='text-md text-justify'>
                            {text}
                        </p>
                        {image &&
                            <FaqImage
                                path={image}
                                pushQ={pushQ}
                            />
                        }
                    </>
                )
            })}
        </div>
    )
}
