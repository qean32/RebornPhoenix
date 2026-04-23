import { Link } from "react-router-dom"
import { title } from "@/config";
import { usePage } from "@lib/hook";

export const NoAuth = () => {
    const { } = usePage(title.NO_AUTH)

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="text-9xl -translate-x-2 uppercase">Необходима <span className="text-red-800">Авторизация</span>!</p>
                <Link to={'/auth'} className="text-2xl">Авторизоваться</Link>
                <img src="/icon/no-find-data-1.svg" alt="" className="icon-4xl mt-5" />
            </div>
        </div>
    )
}
