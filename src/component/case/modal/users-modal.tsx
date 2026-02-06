import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { ModalCross, NoFindData, Search } from '@component/ui'
import { UserInModal } from '@/component/ui/item'
import { useQ, useRequest, useToast } from '@/lib/hook'
import { qpk } from '@/export'
import { communityService } from '@/service'
import { userDto } from '@/model'
import { useAppDispatch, useAppSelector } from '@/lib/hook/redux'
import { pushUser } from '@/store/session-store'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Users: React.FC<Props> = ({ swap }: Props) => {
    const { pushQ } = useQ(qpk.pushcharacter)
    const dispath = useAppDispatch()
    const { session } = useAppSelector(state => state.session)
    const toast = useToast()

    const pushCharacterHandler = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        pushQ(getHTMLData(e, true).id)
    }, [])

    const pushUserHandler = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        dispath(pushUser({ id: getHTMLData(e, true).id }))
        toast('message', { text: 'Обработка..' })
    }, [])

    const { param } = useQ(qpk.search)
    const [users, loading] = useRequest<userDto[]>(() => communityService.SEARCH_USERS(param), ['search-users', param])
    const [myusers] = useRequest<userDto[]>(() => communityService.GET_USERS_BY_ARRAY(session?.users ?? ''), ['search-users', session.users])

    return (
        <div className='relative bg-color h-full w-[320px] overflow-scroll' onClick={stopPropagation} >
            <ModalCross fn={swap} />
            <div className="pt-10" onClick={pushUserHandler}>
                <p className='pl-5 pb-5'>Добавить игрока</p>
                <Search className='mx-2 mb-4' />
                <div className="h-[300px] overflow-scroll pointer-events-none">
                    <NoFindData title='По вашему запросу не найдены пользователи!' view={!loading && !users?.length} className='pt-5' />
                    {!!users?.length &&
                        users.map(item => {
                            return (
                                <UserInModal
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })}
                </div>
            </div>
            <div className="" onClick={pushCharacterHandler}>
                <p className='pl-5 pb-5'>Ваши игроки</p>
                {!!myusers?.length &&
                    myusers.map(item => {
                        return (
                            <UserInModal
                                key={item.id}
                                {...item}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
