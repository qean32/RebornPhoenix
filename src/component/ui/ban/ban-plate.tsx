import React from 'react'

interface Props {
    ban: boolean
}


export const BanPlate: React.FC<Props> = ({ ban }: Props) => {
    if (!ban) {
        return null
    }

    return (
        <div className='bg-red-900 w-fit h-fit px-2 rounded-sm cursor-pointer mt-0.5 text-xl'>
            BAN
        </div>
    )
}
