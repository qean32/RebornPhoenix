import { TextInput, TextArea, Initiative, Button } from '@/component/ui'
import { useMyForm } from '@/lib/hook'
import { useAppDispatch } from '@/lib/hook/redux'
import { stopPropagation } from '@/lib/function'
import { entityInterface } from '@/model'
import { pushEntityToSessionFormSchema, pushEntityToSessionSchema } from '@/model/schema'
import { editBestiary } from '@/store/session-store'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    entity: entityInterface
    swap: Function
}


export const EditBestiaryForm: React.FC<Props> = ({ entity, swap }: Props) => {
    const dispath = useAppDispatch()
    const { form, submitHandler } = useMyForm<pushEntityToSessionFormSchema>(pushEntityToSessionSchema,
        (data: any) => {
            dispath(editBestiary({ ...entity, ...data, id: entity.idInBestiary }))
            swap()
        },
        () => { },
    )


    return (

        <FormProvider {...form}>

            <form
                className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'
                onClick={stopPropagation}
                onSubmit={submitHandler}
            >
                <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${entity ? entity.path : ''})` }} ></div>
                <div className="w-11/12 rounded-sm pt-10 flex flex-col gap-2 h-full">
                    <TextInput name='name' placeHolder='Наименование' defaultValue={entity.name} />
                    <TextArea name='description' title='' className='p-4 px-5 h-[300px] overflow-scroll' initValue >
                        {entity.description}
                    </TextArea>
                    <TextInput name='initiative' placeHolder='' className='d-none' defaultValue={entity ? entity.initiative.toString() : '0'} />
                    <TextInput name='id' placeHolder='' className='d-none' defaultValue={entity ? entity.idInBestiary.toString() : '0'} />
                    <Initiative title={entity ? entity.initiative : 0} />
                    <div className="flex flex-1 items-end pb-5">
                        <Button className='py-2.5 mt-5 w-full' type='submit' variant='acceess'>
                            Сохранить
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
