import React from 'react'

interface Props extends React.ComponentProps<"img"> {
}


export const ModalCross: React.FC<Props> = (props: Props) => {
    return (
        <img src="/icon/cross.svg" className='icon-sm- absolute right-2.5 top-3 cursor-pointer z-20' alt="" {...props} />
    )
}
