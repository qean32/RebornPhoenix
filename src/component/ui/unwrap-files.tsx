import React from 'react'
import { cn } from '../../lib/function'
import { fileType } from '@/model'
import { File } from '@component/ui'

interface Props {
    className?: string
    files: fileType[],
    imgView?: boolean
}


export const UnwrapFiles: React.FC<Props> = ({
    className,
    files,
    imgView = true
}: Props) => {

    return (
        <div className={cn("flex flex-col gap-1", className)}>
            {!!files.length && files.map(item => {
                return <File
                    imgView={imgView}
                    key={item.path}
                    path={item.path}
                    className="bg-color-dark py-4 px-5"
                />
            })}
        </div>
    )
}
