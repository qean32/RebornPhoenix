import { Link } from "react-router-dom"
import { PostColumn, PlusButton, NoFindData } from "@component/ui"
import { useRequest } from "@lib/hook"
import React from "react"
import { PostItem } from "@component/ui/item"
import { ViewAuthor } from "@/component/master/h-order-component"
import { profileService } from "@/service"
import { postType } from "@/model/post.type"
import { DepartmentSceleton } from "@/component/case/sceleton"
import { departmentMap } from "@/config"

interface Props {
    id: number | string
}

export const Posts: React.FC<Props> = ({ id }: Props) => {
    const [posts, loading] = useRequest<postType[]>(() => profileService.GET_POSTS(id ?? 0), [`profile-post-${id}`])

    return (
        <div className='pt-2 pb-4'>
            <PostColumn />
            {loading && <DepartmentSceleton />}

            {!!posts?.length &&
                posts?.map(item => {
                    return <PostItem
                        {...item}
                        // @ts-ignore
                        department={departmentMap.get(item.department)}
                        className="pl-2 -translate-x-1"
                        key={item.id}
                    />
                })}

            {!posts?.length && !loading && <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" />}

            <ViewAuthor payload_id={id ?? 0}>
                <div className="mt-4">
                    <Link to={'/create-post'}>
                        <PlusButton className='h-[100px] mt-1' iconSize='icon-md' /></Link>
                </div>
            </ViewAuthor>
        </div>
    )
}