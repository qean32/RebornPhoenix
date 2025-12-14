import React from 'react'
import { CommentItem } from '@component/ui/item'
import { CommentForm } from '@/component/case/form'

interface Props {
}


export const CommentBlock: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="bg-color-dark rounded-lg pb-2">
            <CommentForm />
            <p className='pl-6 py-2 text-2xl'>Коментарии</p>
            {[{}].map(item => {
                return (<CommentItem {...item} date='' files={[]} id={1} text='' user={{ ava: '', email: '', id: 1, name: '' }} />)
            })}
        </div>
    )
}
