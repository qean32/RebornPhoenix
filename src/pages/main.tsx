import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner,
    Map
} from "@/component/ui/main";
import { title, urlTitle } from "@/config";
import { usePage } from "@lib/hook";
import { useSearchParams } from "react-router-dom";


export const Main = () => {
    const [url] = useSearchParams()
    usePage(title.main, !!url.get(urlTitle.forceupdate))

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