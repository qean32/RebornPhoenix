import { qpk } from "@/config"
import { useQ } from "@/lib/hook"
import { cn } from "@/lib/function"

interface SelectProps {
    className?: string
    options: { value: string, title: string }[]
}


export const SelectToQuery: React.FC<SelectProps> = ({ className = 'w-fit', options }: SelectProps) => {
    const { pushQ } = useQ(qpk.select)

    return (
        <select
            className={cn('flex-1', className)}
            onChange={e => pushQ(e.target.value)}
        >
            {options.map(({ title, value }) => {
                return <option key={value} value={value}>{title}</option>
            })}
        </select>
    )
}