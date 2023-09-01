import { useFormik } from 'formik'
import * as Yup from 'yup'

import { formApi, FormValues } from 'api'

const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
}

export const useForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: async values => await formApi.sendFormData(values),
    })

    return { formik }
}
