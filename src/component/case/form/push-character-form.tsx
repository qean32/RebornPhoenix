import React from 'react'
import { Title, TextInput } from '@component/ui'
import { pushCharacterDto, pushCharacterSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { REJECT_SERVER } from '@/export'

interface Props {
    children: React.ReactNode
}

const ACCEESS_ACTION = 'Персонаж создан'
export const PushCharaterForm: React.FC<Props> = ({ children }: Props) => {
    const toast = useToast()
    const { form, submitHandler } =
        useMyForm<pushCharacterDto>(
            pushCharacterSchema,
            (data: pushCharacterDto) => {
                profileService.createCharacter(data)
                    .then(({ status }) => {
                        if (status == 200) {
                            toast('message', { text: ACCEESS_ACTION })
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={submitHandler} className='flex flex-col h-full'>
                <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
                <p className='pb-6'>используйте персонажей с сайта <a href="">aternia.games</a>!</p>
                <TextInput placeHolder='Ссылка' name='path' />
                <div className="flex flex-1 gap-4 justify-end items-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
