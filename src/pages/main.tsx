import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner,
    Map
} from "@/component/ui/main";
import { qParamName, title } from "@/export";
import { initSetUser } from "@/lib/function";
import { usePage, useQueryParam } from "@lib/castom-hook";

export const Main = () => {
    const { } = usePage(title.main)
    const { param } = useQueryParam(qParamName.forceupadeteuser)
    initSetUser(!!param)

    return (
        <main>
            <Carousel />
            <MainBanner />
            <BlockOne />
            <BlockTwo />
            <BlockThree />
            <LargeLogo />
            <Map />
            <Carousel />
        </main >
    );
}