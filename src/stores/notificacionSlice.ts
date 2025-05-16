import { StateCreator } from "zustand"

export type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type notificacionSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}

export const createNotificacionSlice: StateCreator<notificacionSliceType, [], [], notificacionSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification()
        }, 5000);
    },
    hideNotification: () => {
        set({
            notification: {
                ...get().notification,
                text: '',
                show: false
            },
        })
    }
})