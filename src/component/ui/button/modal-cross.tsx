import React from 'react'

interface Props {
    fn: React.MouseEventHandler<HTMLImageElement>
}


export const ModalCross: React.FC<Props> = ({ fn }: Props) => {
    return (
        <img src="/icon/cross.svg" className='icon-sm- absolute right-2.5 top-3 cursor-pointer z-20' alt="" onClick={fn} />
    )
}
