import { ViewAuthor } from "@/component/master/h-order-component"
import { f_post } from "@/f"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { LinkCharacterItem } from "@component/ui/item"


export const Character: React.FC<{}> = ({ }: {}) => {

    return (
        <>
            {!true &&
                <div className="w-full">

                    <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[360px]" view={true} />
                </div>
            }
            <div className='grid gap-5 grid-cols-12 pt-1 adaptive2k-grid-column-15'>
                {f_post.slice(0, 14).map((__, _) =>
                    <LinkCharacterItem path='https://aternia.games/i/dnd/character_sheet/show/10399ffb-e071-4c6d-b7f2-3f4fcee3fab0' key={_} number={_ + 1} name='Клиган Клиган' />
                )}
                <ViewAuthor>
                    <Modal.Root modal={Modal.PushCharacterInProfile}>
                        <PlusButton className='h-[100px]' iconSize='icon-sm' />
                    </Modal.Root>
                </ViewAuthor>
            </div>
        </>
    )
}