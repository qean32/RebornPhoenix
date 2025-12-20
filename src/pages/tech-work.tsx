export const TechWork = () => {
    document.title = "Тех. перерыв"

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="uppercase text-9xl -translate-x-2">Технический перерыв!</p>
                <img src="/icon/no-find-data-1.svg" className="icon-2xl" />
                <p className="mt-3">Сайт проходит тех обзор</p>
                <p className="text-sm">А как часто <span className="text-red-800 text-2xl">вы</span> играете в d&d?</p>
            </div>
        </div>
    )
}