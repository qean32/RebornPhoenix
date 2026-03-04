import { cn } from "@/lib/function"
import { useSelectFilterThrow } from "@/lib/hook/throw"

interface SelectProps {
    className?: string
    options: { value: string | number, title: string }[]
}


export const SelectToQuery: React.FC<SelectProps> = ({ className = 'w-fit', options }: SelectProps) => {
    const [_, swap] = useSelectFilterThrow()

    return (
        <select
            className={cn('flex-1', className)}
            onChange={e => swap(Number(e.target.value))}
        >
            {options.map(({ title, value }) => {
                return <option key={value} value={value}>{title}</option>
            })}
        </select>
    )
}