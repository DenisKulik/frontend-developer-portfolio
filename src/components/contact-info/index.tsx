import { InfoItem } from 'components/info-item'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { S } from './contact-info.styles.ts'

export const ContactInfo = () => {
  return (
    <S.ContactInfo>
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
    </S.ContactInfo>
  )
}
