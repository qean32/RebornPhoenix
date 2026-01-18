import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import z from "zod";
import { useToast } from "./use-toast";

export const useMyForm = <T extends FieldValues,>(
    schema: z.ZodObject<T> | any,
    submitCallBack: Function,
    submitErrorCallBack: Function,
) => {
    const toast = useToast()
    const form = useForm<T>({
        mode: 'onChange',
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<T> = (data: T) => {
        if (data) {

            submitCallBack(data)
        }
        toast('message', { text: 'Отправка..' }, 2000)
    }
    const onError: SubmitErrorHandler<T> = (data) => {
        if (data) {

            submitErrorCallBack(data)
        }
        console.log('АП:', data);
        toast('message', { text: 'Поля заполнены некорректно' }, 2000)
    }
    const submitHandler = form.handleSubmit(onSubmit, onError)


    return { submitHandler, form, clear: form.reset }
}