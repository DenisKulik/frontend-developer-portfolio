import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

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
    onSubmit: async (values, { resetForm }) => {
      try {
        await formApi.sendFormData(values)
        resetForm()
        toast.success('Message sent successfully!')
      } catch (err) {
        // Обработка ошибки
        const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
        toast.error(errorMessage)
      }
    },
  })

  return { formik }
}
