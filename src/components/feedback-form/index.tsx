import { S } from 'components/feedback-form/feedback-form.styles.ts'
import { Button } from 'components/button'
import { useForm } from 'hooks'

export const FeedbackForm = () => {
  const { formik } = useForm()

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.InputWrapper>
        <S.Input type="text" placeholder="Name" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name && (
          <S.ErrorMessage>{formik.errors.name}</S.ErrorMessage>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="email" placeholder="E-mail" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email && (
          <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input as={S.Textarea} placeholder="Message" {...formik.getFieldProps('message')} />
        {formik.touched.message && formik.errors.message && (
          <S.ErrorMessage>{formik.errors.message}</S.ErrorMessage>
        )}
      </S.InputWrapper>
      <Button type="submit" disabled={!formik.isValid}>
        Send
      </Button>
    </S.Form>
  )
}
