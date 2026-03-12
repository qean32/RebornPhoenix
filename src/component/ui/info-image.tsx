import { useViewImgThrow } from '@/lib/hook/throw'
import React from 'react'

interface Props {
    path: string,
}


export const InfoImage: React.FC<Props> = ({
    path,
}: Props) => {
    const [_, swap] = useViewImgThrow()

    return (
        <div className='mt-5'>
            <img
                src={path}
                alt=""
                className='cursor-pointer rounded-sm w-full'
                onClick={() => swap(path)}
            />
        </div>
    )
}
