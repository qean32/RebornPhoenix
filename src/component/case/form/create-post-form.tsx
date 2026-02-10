import React from 'react'
import { PushTagInForm, HiddenTextInput, Button, UploadFilesInCreatePost, Select, Hints, TextArea, UnwrapRemoveFiles } from '../../ui'
import { previewPost } from '@/lib/function'
import { FormProvider } from 'react-hook-form'
import { createPostFormSchema, createPostSchema } from '@/model/schema'
import { useMyForm, useToast } from '@/lib/hook'
import { forumService } from '@/service'
import { departmentOptions, REJECT_SERVER } from '@/export'
import { useNavigate } from 'react-router-dom'

interface Props {
}

const ACCEESS_ACTION = 'Пост создан!'
export const CreatePostForm: React.FC<Props> = ({ }: Props) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const toast = useToast()
    const navigate = useNavigate()

    const { form, submitHandler } =
        useMyForm<createPostFormSchema>(
            createPostSchema,
            (data: createPostFormSchema) => {
                forumService.CREATE_POST(data)
                    .then(({ status }) => {
                        if (status == 200) {
                            toast('message', { text: ACCEESS_ACTION })
                            setTimeout(() => {
                                navigate('/')
                            }, 600)
                        }
                    })
                    .catch(() => {
                        toast('message', { text: REJECT_SERVER })
                    })
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form onSubmit={submitHandler}>
                <div className='w-[200px] pb-2 pl-0.5'>
                    <Select
                        name='department'
                        options={departmentOptions} />
                </div>

                <Upper
                    preview={() => previewPost(ref)}
                />

                <UnwrapRemoveFiles />

                <div className="py-5">
                    <PushTagInForm
                        name='tags'
                    />
                </div>

                <TextArea
                    title="Описание вашей статьи"
                    className='min-h-[160px] p-2 px-3 mb-5'
                    name='description'
                />

                <TextArea
                    convertHTML
                    ref={ref}
                    title='Текст вашей статьи'
                    className='p-2 px-3 min-h-[600px]'
                    name='payload_content'
                />
                <Hints />
            </form>
        </FormProvider>
    )
}

type Props_ = {
    preview: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const Upper: React.FC<Props_> = ({ preview }: Props_) => {

    return (
        <div className="flex justify-between pb-4">
            <HiddenTextInput className="items-end flex pl-1" title="НАЗВАНИЕ ПОСТА" name='title' />
            <div className="flex gap-3 items-end">
                <UploadFilesInCreatePost name='files'>
                    <div className="flex h-full items-center cursor-pointer">
                        <img src="/icon/upload.svg" className='icon-md' />
                    </div>
                </UploadFilesInCreatePost>
                <Button fn={preview} variant='default'><p>Предпросмотр</p></Button>
                <Button variant="acceess" type='submit'><p>Готово</p></Button>
            </div>
        </div>
    )
}
