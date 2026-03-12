import React from 'react'
import { convertToHTML } from '@/lib/function'
import { separatorLink } from '@/config'

interface Props {
    content?: string
    description: string
    children: React.ReactNode
}


export const MainBlock: React.FC<Props> = ({ content = 'статья', children, description }: Props) => {
    const data = content.replace('script', '').split(separatorLink)

    return (
        <div className="rounded-sm py-2">
            <div className="flex flex-col pb-3">
                <p className="text-xl pb-4">{description}</p>
                <div dangerouslySetInnerHTML={{ __html: convertToHTML(data[0], data[1]) }}>
                </div>
            </div>
            {children}
        </div >
    )
}
