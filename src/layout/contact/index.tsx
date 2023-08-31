import { Slide } from 'react-awesome-reveal'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { HiDevicePhoneMobile } from 'react-icons/hi2'

import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { S } from 'layout/contact/contact.styles.ts'
import { InfoItem } from 'components/info-item'
import { FeedbackForm } from 'components/feedback-form'

export const Contact = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Contact</Heading>
                    <S.ContactInner>
                        <S.InfoAboutMe>
                            <InfoItem
                                title="Location"
                                icon={HiOutlineLocationMarker}
                                size="4rem"
                                color="white"
                                description="Kemerovo, Russia"
                            />
                            <InfoItem
                                title="Email"
                                icon={HiOutlineMail}
                                size="4rem"
                                color="white"
                                linkType="mailto"
                                linkText="kulikdenis1996x@gmail.com"
                            />
                            <InfoItem
                                title="Phone"
                                icon={HiDevicePhoneMobile}
                                size="4rem"
                                color="white"
                                linkType="tel"
                                linkText="+79069248512"
                            />
                        </S.InfoAboutMe>
                        <FeedbackForm />
                    </S.ContactInner>
                </Slide>
            </Container>
        </S.Contact>
    )
}
