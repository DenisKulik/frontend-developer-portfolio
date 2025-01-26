import { Slide } from 'react-awesome-reveal'
import { Zoom } from 'react-awesome-reveal'

import { S } from 'layout/skills/skills.styles.ts'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { Skill } from 'components/skill'
import { skills } from 'data'

export const Skills = () => {
  const skillItems = skills.map((skill, idx) => (
    <Skill key={idx} title={skill.title} icon={skill.icon} color={skill.color} size="10rem" />
  ))

  return (
    <S.Skills id="skills">
      <Container>
        <Slide direction="up" duration={1500} triggerOnce={true}>
          <Heading>Skills</Heading>
          <S.SkillsInner>
            <Zoom duration={200} triggerOnce={true} cascade={true}>
              {skillItems}
            </Zoom>
          </S.SkillsInner>
        </Slide>
      </Container>
    </S.Skills>
  )
}
