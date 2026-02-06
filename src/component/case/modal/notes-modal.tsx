import React from 'react'
import { stopPropagation } from '@/lib/function'
import { ModalCross } from '@component/ui'
import { useAppSelector } from '@/lib/hook/redux'
import { useDebounce } from '@/lib/hook'
import { useAppDispatch } from '@/store'
import { pushNote } from '@/store/session-store'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Notes: React.FC<Props> = ({ swap }: Props) => {
    const [note, setNote] = React.useState('')
    const debounceNote = useDebounce(note, 2000)
    const { session } = useAppSelector(state => state.session)
    const dispath = useAppDispatch()

    React.useEffect(() => {
        if (debounceNote)
            dispath(pushNote({ note: debounceNote }))
    }, [debounceNote])

    React.useEffect(() => {
        if (session) {
            setNote(session.note)
        }
    }, [])


    return (
        <div className="relative bg-color w-8/12 h-9/12 px-4 pt-4 rounded-md overflow-scroll flex flex-col" onClick={stopPropagation}>
            <ModalCross fn={swap} />
            <p className='text-xl pb-4 pl-0.5'>Заметки</p>
            <textarea
                onChange={e => setNote(e.target.value)}
                value={note}
                placeholder="Ваши заметки"
                className="bg-color-dark rounded-sm p-2 px-3 flex-1"
            ></textarea>
        </div>
    )
}
