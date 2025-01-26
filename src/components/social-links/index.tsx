import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiTelegramFill } from 'react-icons/ri'

import { S } from 'components/social-links/social-links.styles.ts'
import { useTheme } from 'styled-components'
import { Icon } from 'components/icon'

type Props = {
  iconSize: string
}

export const SocialLinks: React.FC<Props> = ({ iconSize }) => {
  const theme = useTheme()

  return (
    <S.SocialLinks>
      <S.IconLink href="https://github.com/DenisKulik" target="_blank">
        <Icon icon={RiGithubFill} size={iconSize} color={theme?.colors.primaryLight} />
      </S.IconLink>
      <S.IconLink href="https://www.linkedin.com/in/denis-kulik" target="_blank">
        <Icon icon={RiLinkedinBoxFill} size={iconSize} color={theme?.colors.primaryLight} />
      </S.IconLink>
      <S.IconLink href="https://t.me/kulikdp" target="_blank">
        <Icon icon={RiTelegramFill} size={iconSize} color={theme?.colors.primaryLight} />
      </S.IconLink>
    </S.SocialLinks>
  )
}
