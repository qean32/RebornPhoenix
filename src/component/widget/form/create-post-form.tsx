import React from 'react'
import { PushTagInForm, HiddenTextInput, Button, UploadFilesInCreatePost, Select, Hints, TextArea, UnwrapRemoveFiles } from '../../ui'
import { handleFetchCatch, handleFetchThen, previewPost } from '@/lib/function'
import { FormProvider, useFormContext } from 'react-hook-form'
import { createPostFormSchema, createPostSchema } from '@/model/schema'
import { useMyForm, useToast } from '@/lib/hook'
import { forumService } from '@/service'
import { departmentOptions } from '@/config'
import { useNavigate } from 'react-router-dom'

interface Props {
}

const ACCEESS_ACTION = 'Пост создан!'
export const CreatePostForm: React.FC<Props> = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const { form, submitHandler } =
        useMyForm<createPostFormSchema>(
            createPostSchema,
            (data: createPostFormSchema) => {
                forumService.CREATE_POST(data)
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, () => {
                        setTimeout(() => {
                            navigate('/')
                        }, 600)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
            },
        )

    return (
        <FormProvider {...form}>

            <form onSubmit={submitHandler}>
                <div className='w-[200px] pb-2 pl-0.5'>
                    <Select
                        name='department'
                        options={departmentOptions} />
                </div>

                <Upper />

                <UnwrapRemoveFiles />

                <PushTagInForm
                    className='py-5'
                    name='tags'
                />

                <TextArea
                    title="Описание вашей статьи"
                    className='min-h-[160px] p-2 px-3 mb-5'
                    name='description'
                />

                <TextArea
                    convertHTML
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
}

const Upper: React.FC<Props_> = () => {
    const { watch } = useFormContext()

    return (
        <div className="flex justify-between pb-4">
            <HiddenTextInput className="items-end flex pl-1" title="НАЗВАНИЕ ПОСТА" name='title' />
            <div className="flex gap-3 items-end">
                <UploadFilesInCreatePost name='files'>
                    <div className="flex h-full items-center cursor-pointer">
                        <img src="/icon/upload.svg" className='icon-md' />
                    </div>
                </UploadFilesInCreatePost>
                <Button onClick={() => { previewPost(watch('payload_content')) }} variant='default'><p>Предпросмотр</p></Button>
                <Button variant="acceess" type='submit'><p>Готово</p></Button>
            </div>
        </div>
    )
}
