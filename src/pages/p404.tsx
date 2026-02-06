import { Link, useNavigate } from "react-router-dom"
import { title } from "@/export";
import { usePage } from "@lib/hook";

export const P404 = () => {
    const { } = usePage(title.p404)
    const navigate = useNavigate();

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="text-9xl -translate-x-2 uppercase">Страница <span className="text-red-800">404</span>!</p>
                <img src="/icon/no-find-data-1.svg" alt="" className="icon-2xl" />
                <p className="mt-3">Как вы сюда попали?</p>
                <Link to={'..'}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}>
                    Назад</Link>
            </div>
        </div>
    )
}