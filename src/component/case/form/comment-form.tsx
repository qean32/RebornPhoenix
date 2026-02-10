import React from 'react'
import { commentFormSchema, commentSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { Button, FileInput, TextArea, UnwrapRemoveFiles } from '@/component/ui'
import { useMyForm, useToast } from '@/lib/hook'
import { forumService } from '@/service'
import { useParams } from 'react-router-dom'
import { REJECT_SERVER } from '@/export'
import { useTmpObject } from '@/lib/hook'

interface Props {
    push: Function
    update: Function
    _delete: Function
}

const ACCEESS_ACTION_UPDATE = 'Коментарий обновлен!'
const ACCEESS_ACTION_CREATE = 'Коментарий оставлен!'
export const CommentForm: React.FC<Props> = ({ push, update, _delete }: Props) => {
    const { id } = useParams()
    const { tmpObject, key, clearTmp } = useTmpObject()

    React.useEffect(() => {
        if (key == 'delete-comment') {
            _delete(tmpObject)
            clearTmp()
            toast('message', { text: 'Коментарий удален' })
        }
    }, [key, tmpObject])
    const toast = useToast()

    const { form, submitHandler, clear } =
        useMyForm<commentFormSchema>(
            commentSchema,
            (data: commentFormSchema) => {
                clear()
                if (key == 'update-comment') {
                    forumService.UPDATE_COMMENT(data, tmpObject?.id ?? 0)
                        .then(({ status, data }) => {
                            if (status == 200) {
                                toast('message', { text: ACCEESS_ACTION_UPDATE })
                                update(data)
                                clearTmp()
                            }
                        })
                        .catch(() => toast('message', { text: REJECT_SERVER }))
                } else {
                    forumService.CREATE_COMMENT(data, id ?? 0)
                        .then(({ status, data }) => {
                            if (status == 200) {
                                toast('message', { text: ACCEESS_ACTION_CREATE })
                                push(data)
                            }
                        })
                        .catch(() => toast('message', { text: REJECT_SERVER }))
                }
            },
            () => { }
        )

    return (
        <FormProvider {...form}>
            <form className="" onSubmit={submitHandler}>
                <div className="p-5 py-4 pb-0">
                    <div className='flex outline-bg-light outline-1 rounded-sm items-end py-2 pb-1'>
                        <Button className='px-4' variant='ghost'><FileInput
                            name='files' /></Button>
                        <TextArea
                            initValue={true}
                            name='payload_content'
                            convertHTML={false}
                            title='Ваш коментарий'
                            parentDivclassName='w-full max-h-[300px] overflow-scroll translate-y-1.5 text-xl'
                            className='no-min-h'
                        >
                            {/* @ts-ignore */}
                            {(tmpObject && key == 'update-comment') ? tmpObject?.content : ''}
                        </TextArea>
                        <Button className='px-5' variant='ghost' type='submit'>
                            <img src="/icon/send.svg" alt="" className="icon-md" /></Button>
                    </div>
                    <UnwrapRemoveFiles />
                </div>
            </form>
        </FormProvider>
    )
}
