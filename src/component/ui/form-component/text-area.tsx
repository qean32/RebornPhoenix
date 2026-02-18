import React from 'react'
import { cn } from '../../../lib/function'
import { useFormContext } from 'react-hook-form'
import { HoverHint } from '../../master/h-order-component'
import { DangerIcon } from '..'
import { useEditable } from "use-editable";
import { separator, separatorLink } from '@/config'

interface Props {
    className?: string
    parentDivclassName?: string
    title: string
    name: string
    convertHTML?: boolean
    initValue?: string
}


export const TextArea: React.FC<Props> = ({
    className,
    title,
    name,
    convertHTML = false,
    parentDivclassName,
    initValue = ""
}: Props) => {
    const { formState: { errors }, setValue, watch } = useFormContext()
    const textError = errors[name]?.message as string;

    React.useEffect(() => {
        if (initValue) {
            setValue(name, initValue ?? watch(name))
            setCode(initValue ?? watch(name))
        }
    }, [initValue])

    React.useEffect(() => {
        if (!watch(name)) {
            setCode("")
        }
    }, [watch(name)])

    const editorRef = React.useRef(null);
    const [code, setCode] = React.useState<string>('');

    const onEditableChange = React.useCallback((code: string) => {
        setCode(code.slice(0, -1));
        // @ts-ignore
        setValue(name, convertHTML ? code.replaceAll('/', '').replaceAll('\n', separator) + separatorLink + code.match(/\{(.*?)\}/g)?.join(separator).replaceAll('/', ';') : code.slice(0, -1))
    }, []);

    useEditable(editorRef, onEditableChange, {
        disabled: false,
        indentation: 2
    });

    return (
        <div className={cn("relative", parentDivclassName)}>
            {!code.length &&
                <p className='absolute top-2 opacity-20 pointer-events-none text-sm-'>
                    {title}
                </p>
            }
            {textError &&
                <HoverHint className='top-5 absolute -translate-y-1/2 right-2' text={textError} x={'left'} y={'bottom'} >
                    <DangerIcon />
                </HoverHint>}
            <pre
                style={{ whiteSpace: 'pre-wrap' }}
                ref={editorRef}
                className={cn("outline-0 bg-color-dark h-full w-full rounded-md min-h-[200px]", className)}
            >
                {code.split(/\r?\n/).map((text, i) => (
                    <React.Fragment key={i}>
                        <span>{text}</span>
                        {'\n'}
                    </React.Fragment>
                ))}
            </pre>
        </div >
    )
}
