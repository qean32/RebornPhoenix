import React from 'react'
import { commentFormSchema, commentSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { Button, FileInput, TextArea, UnwrapRemoveFiles } from '@/component/ui'
import { useMyForm, useToast } from '@/lib/hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'
import { useTmpObject } from '@/lib/hook'
import { handleFetchCatch, handleFetchThen } from '@/lib/function'
import { requestEditableFn } from '@/model'

interface Props extends requestEditableFn {
}

const ACCEESS_ACTION_UPDATE = 'Коментарий обновлен!'
const ACCEESS_ACTION_CREATE = 'Коментарий оставлен!'
export const CommentForm: React.FC<Props> = ({ deleteItem, pushItem, updateItem }: Props) => {
    const { id } = useParams()
    const { tmpObject, key, clearTmp } = useTmpObject()

    React.useEffect(() => {
        if (key == 'delete-comment') {
            deleteItem(tmpObject)
            clearTmp()
        }
    }, [key])
    const toast = useToast()

    const { form, submitHandler, clear } =
        useMyForm<commentFormSchema>(
            commentSchema,
            (data: commentFormSchema) => {
                clear()
                if (key == 'update-comment') {
                    forumService.UPDATE_COMMENT(data, tmpObject?.id ?? 0)
                        .then(response => handleFetchThen(response, toast, ACCEESS_ACTION_UPDATE, (data) => {
                            updateItem(data)
                            clearTmp()
                        }))
                        .catch(response => handleFetchCatch(response, toast))
                    return
                }

                forumService.CREATE_COMMENT(data, id ?? 0)
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION_CREATE, (data) => {
                        pushItem(data)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>
            <form className="" onSubmit={submitHandler}>
                <div className="p-5 py-4 pb-0">
                    <div className='flex outline-bg-light outline-1 rounded-sm py-2 pb-1'>
                        <Button className='px-4 flex' variant='ghost'><FileInput
                            name='files' /></Button>
                        <TextArea
                            offset={false}
                            name='payload_content'
                            title='Ваш коментарий'
                            parentDivclassName='w-full max-h-[300px] text-xl flex-1 pt-0.5 overflow-scroll translate-y-0.5'
                            className='no-min-h pt-0.5'
                            // @ts-ignore
                            initValue={tmpObject?.content}
                        />
                        <Button className='px-4 flex items-start' variant='ghost' type='submit'>
                            <img src="/icon/send.svg" alt="" className="icon-md" /></Button>
                    </div>
                    <UnwrapRemoveFiles />
                </div>
            </form>
        </FormProvider>
    )
}
