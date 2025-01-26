import React from 'react'
import { IconType } from 'react-icons'

import { S } from 'components/skill/skill.styles.ts'
import { Icon } from 'components/icon'

export type Props = {
  title: string
  icon: IconType
  size: string
  color: string
}

export const Skill: React.FC<Props> = props => {
  const { title, icon, size, color } = props

  return (
    <S.Skill>
      <Icon icon={icon} color={color} size={size} />
      <S.Title>{title}</S.Title>
    </S.Skill>
  )
}
