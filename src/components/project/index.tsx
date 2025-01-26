import { FC } from 'react'
import { S } from 'components/project/project.styles.ts'

type Props = {
  img: string
  title: string
  url: string
  technologies: string
}

export const Project: FC<Props> = props => {
  const { img, title, url, technologies } = props
  const ProjectHeaderStyles = { backgroundImage: `url(${img})` }

  return (
    <S.Project>
      <S.ProjectHeader style={ProjectHeaderStyles}>
        <S.Link href={url} target="_blank">
          View
        </S.Link>
      </S.ProjectHeader>
      <S.Title>{title}</S.Title>
      <S.Description>{technologies}</S.Description>
    </S.Project>
  )
}
