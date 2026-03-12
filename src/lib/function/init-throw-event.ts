import { eventType } from "@/model";
import { serverService } from "@/service";
import { useParams } from "react-router-dom";

export const initThrowEvent = () => {
    const { id } = useParams()

    const throwEvent = (event: eventType) => {

        serverService.event(id ?? 0, event)
    }

    return throwEvent
}