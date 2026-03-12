import React from 'react'
import { Link, useParams } from 'react-router-dom'

interface Props {
}


export const Crumb: React.FC<Props> = () => {
    const { name, department } = useParams()

    return (
        <div className="flex items-center w-fit py-3 rounded-sm gap-2">
            <Link to={'/forum'}><p>Форум</p></Link>
            <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
            <Link to={`/department/${department}`}><p>{department ?? 'Раздел'}</p></Link>
            <img src="/icon/double-arrow.svg" className="icon-sm- rotate-180 opacity-50" />
            <p className="cursor-pointer">{name ?? "Ваша статья"}</p>
        </div>
    )
}
