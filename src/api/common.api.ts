import axios from 'axios'

export const commonApi = axios.create({
    baseURL: 'https://gmail-smtp-alpha.vercel.app/',
})
