import { commonApi } from './common.api'

export const formApi = {
    sendFormData(data: FormValues) {
        return commonApi.post('sendMessage', data)
    },
}

export type FormValues = {
    name: string
    email: string
    message: string
}
