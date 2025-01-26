import React from 'react'
import { IconType } from 'react-icons'

import { Icon } from 'components/icon'
import { S } from 'components/info-item/info-item.styles.ts'

type Props = {
  title: string
  icon: IconType
  size: string
  color: string
  description?: string
  linkType?: string
  linkText?: string
}

export const InfoItem: React.FC<Props> = props => {
  const { title, icon, size, color, ...restProps } = props

  return (
    <S.InfoItem>
      <Icon icon={icon} size={size} color={color} />
      <div>
        <S.Title>{title}</S.Title>
        {restProps.linkType ? (
          <S.Link href={`${restProps.linkType}:${restProps.linkText}`}>{restProps.linkText}</S.Link>
        ) : (
          <S.Description>{restProps.description}</S.Description>
        )}
      </div>
    </S.InfoItem>
  )
}
