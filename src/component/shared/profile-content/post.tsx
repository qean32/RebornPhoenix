import { Link } from "react-router-dom"
import { PostColumn, PlusButton, NoFindData } from "@component/ui"
import { useBoolean, useRequest } from "@lib/castom-hook"
import React from "react"
import { PostItem } from "@component/ui/item"
import { ViewAuthor } from "@/component/master/h-order-component"
import { profileService } from "@/service"
import { postDto } from "@/model/post.dto"

interface Props {
    view: boolean
    id: number | string
}

export const Post: React.FC<Props> = ({ view, id }: Props) => {
    const { on, off } = useBoolean(view)
    const { finaldata, loading } = useRequest<postDto>(() => profileService.getPosts(id ?? 0), [('profile-post' + id)])

    React.useEffect(() => {
        if (view) {
            on()
        } else {
            off()
        }
    }, [view])

    if (!view) {
        return null
    }

    return (
        <div className='pt-2 pb-4'>
            <PostColumn />
            {!!finaldata.length &&
                finaldata.map(item => {
                    return <PostItem
                        {...item}
                        className="pl-2 -translate-x-1"
                        key={item.id}
                    />
                })}
            <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" view={!finaldata.length && !loading} />

            <ViewAuthor payload_id={id ?? 0}>
                <div className="px-1 mt-4">
                    <Link to={'/create-post'}><PlusButton className='h-[100px] mt-1' iconSize='icon-md' /></Link>
                </div>
            </ViewAuthor>
        </div>
    )
}