import { FormEvent } from 'react'

import { S } from 'components/feedback-form/feedback-form.styles.ts'
import { Button } from 'components/button'

export const FeedbackForm = () => {
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

    return (
        <form onSubmit={onSubmitHandler}>
            <S.Input type="text" placeholder="Name" name="name" />
            <S.Input type="email" placeholder="E-mail" name="email" />
            <S.Input as={S.Textarea} placeholder="Message" name="message" />
            <Button type="submit">Send</Button>
        </form>
    )
}
