import React from 'react'

interface Props {
    path: string,
    pushQ: (value: string) => void
}


export const InfoImage: React.FC<Props> = ({
    path,
    pushQ
}: Props) => {
    return (
        <div className='mt-5'>
            <img
                src={path}
                alt=""
                className='cursor-pointer rounded-sm w-full'
                // @ts-ignore
                onClick={() => pushQ(path)}
            />
        </div>
    )
}
