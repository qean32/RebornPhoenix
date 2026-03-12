import { cn } from "@/lib/function";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    className?: string
}

export const BackArrow: React.FC<Props> = ({ className }: Props) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(-1)
    }

    return (
        <div
            className={cn('bg-color-darkness-hover bg-color-dark rounded-full p-3 transition-200 cursor-pointer hover:opacity-60 w-fit', className)}
            onClick={clickHandler}>
            <img src="/icon/double-arrow.svg" alt="" className='icon-sm' />
        </div>
    )
}