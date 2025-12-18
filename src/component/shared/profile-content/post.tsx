import { Link } from "react-router-dom"
import { f_post } from "@/f"
import { PostColumn, PlusButton, NoFindData } from "@component/ui"
import { useBoolean } from "@lib/castom-hook"
import React from "react"
import { PostItem } from "@component/ui/item"
import { ViewAuthor } from "@/component/master/h-order-component"

interface Props {
    view: boolean
}

export const Post: React.FC<Props> = ({ view }: Props) => {
    const { on, off } = useBoolean(view)

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
            {!!f_post.length &&
                f_post.slice(0, 6).map(item => {
                    return <PostItem {...item} key={item.title} className="pl-2 -translate-x-1" />
                })}
            <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" view={false} />

            <ViewAuthor>
                <div className="px-1 mt-4">
                    <Link to={'/create-post'}><PlusButton className='h-[100px] mt-1' iconSize='icon-md' /></Link>
                </div>
            </ViewAuthor>
        </div>
    )
}