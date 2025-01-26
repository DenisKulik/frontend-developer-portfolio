import React, { ComponentPropsWithoutRef } from 'react'
import { S } from 'components/button/button.styles.ts'

type Props = ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  callback?: () => void
}

export const Button: React.FC<Props> = ({ callback, children, ...restProps }) => {
  return (
    <S.Button onClick={callback} {...restProps}>
      {children}
    </S.Button>
  )
}
