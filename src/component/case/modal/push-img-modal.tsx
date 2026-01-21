import React from 'react'
import { stopPropagation } from '@/lib/function'
import { UploadImgArea, Button, ModalCross } from '@component/ui'
import { useMyForm, useToast } from '@/lib/castom-hook'
import z from 'zod'
import { FormProvider } from 'react-hook-form'
import { sessionService } from '@/service/session-service'
import { useParams } from 'react-router-dom'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const ACCEESS_ACTION = 'Изображение добавленно'
export const PushImg: React.FC<Props> = ({ swap }: Props) => {
    const { id } = useParams()
    const toast = useToast()
    const { form, submitHandler } = useMyForm<{ img: any }>(
        z.object({
            img: z.any()
        }),
        (data: { img: any }) => {
            sessionService.pushImgToSession(data, id ?? 0)
                .then(() => toast('message', { text: ACCEESS_ACTION }))
        },
        () => { }
    )


    return (
        <FormProvider {...form}>

            <form
                className="bg-color w-5/12 h-8/12 rounded-md flex flex-col overflow-hidden relative"
                onClick={stopPropagation}
                onSubmit={submitHandler}
            >
                <ModalCross fn={swap} />
                <div className="m-7 h-10/12">
                    <UploadImgArea
                        className='h-full w-full'
                        name='img'
                    />
                </div>
                <div className="flex gap-5 justify-end p-5 flex-1 items-end">
                    <Button
                        variant='ghost'
                        fn={swap}
                    ><p>Отмена</p></Button>
                    <Button
                        variant='acceess'
                        type='submit'
                    ><p>Добавить</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
