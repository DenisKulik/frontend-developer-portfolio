import { Slide } from 'react-awesome-reveal';
import Container from '../Container';
import Heading from '../../components/Heading';
import { ContactInner, ContactWrapper, InfoAboutMe } from './ContactStyles.ts';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import InfoItem from '../../components/InfoItem';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import Form from '../../components/Form';

const Contact = () => {
    return (
        <ContactWrapper>
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Contact</Heading>
                    <ContactInner>
                        <InfoAboutMe>
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
                        </InfoAboutMe>
                        <Form />
                    </ContactInner>
                </Slide>
            </Container>
        </ContactWrapper>
    );
};

export default Contact;