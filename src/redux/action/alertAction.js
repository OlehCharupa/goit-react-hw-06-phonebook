import { ALERT_ON, ALERT_OFF } from "../constants/index"

export const alertOpen = () => ({
    type: ALERT_ON
})

export const alertClose = () => ({
    type: ALERT_OFF
})