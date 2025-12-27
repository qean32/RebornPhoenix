import React from 'react'
import { commentFormDto, commentSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { Button, FileInput, TextArea, UnwrapRemoveFiles } from '@/component/ui'
import { useMyForm } from '@/lib/castom-hook'
import { useAppSelector } from '@/lib/castom-hook/redux'

interface Props {
}


export const CommentForm: React.FC<Props> = ({ }: Props) => {
    const { tmpObject, key } = useAppSelector(state => state.tmpObject)
    const { form, submitHandler } =
        useMyForm<commentFormDto>(
            commentSchema,
            () => {
                if (key == 'update-comment') {
                } else {
                }
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="" onSubmit={submitHandler}>

                <div className="p-5">
                    <div className='flex outline-bg-light outline-1 rounded-sm items-end py-2 pb-1'>
                        <Button><FileInput
                            name='files' /></Button>
                        <TextArea
                            initValue={true}
                            name='text'
                            title='Ваш коментарий'
                            parentDivclassName='w-full max-h-[300px] overflow-scroll translate-y-1.5 text-xl'
                            className='no-min-h'
                        >
                            {/* @ts-ignore */}
                            {tmpObject ? tmpObject?.text : ''}
                        </TextArea>
                        <Button type='submit'>
                            <img src="/icon/send.svg" alt="" className="icon-md" /></Button>
                    </div>
                    <UnwrapRemoveFiles />
                </div>
            </form>
        </FormProvider>
    )
}
