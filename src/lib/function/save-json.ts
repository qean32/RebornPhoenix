import { sessionService } from "@/service/session-service";
import { useAppSelector } from "../castom-hook/redux";
import { useToast } from "../castom-hook";
import { REJECT_SERVER } from "@/export";

export const saveJson = (toast: ReturnType<typeof useToast>) => {
    const { session, bestiary, info } = useAppSelector(state => state.session)
    const saveJson = () => {
        toast("message", { text: 'Сохранение..' }, 2000);

        sessionService.SAVE_JSON({
            path: info.session,
            data: session
        }, info.session)
            .then(({ status }) => {
                if (status == 200) {
                    toast("message", { text: 'Сохранено' });
                }
            })
            .catch(() => {
                toast("message", { text: REJECT_SERVER });
            })

        sessionService.SAVE_JSON({
            path: info.bestiary,
            data: bestiary
        }, info.bestiary)
            .catch(() => {
                toast("message", { text: REJECT_SERVER });
            })
    }

    return saveJson
}