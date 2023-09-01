import { Slide } from 'react-awesome-reveal'

import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { S } from 'layout/contact/contact.styles.ts'
import { FeedbackForm } from 'components/feedback-form'
import { ContactInfo } from 'components/contact-info'

export const Contact = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Contact</Heading>
                    <S.ContactInner>
                        <ContactInfo />
                        <FeedbackForm />
                    </S.ContactInner>
                </Slide>
            </Container>
        </S.Contact>
    )
}
