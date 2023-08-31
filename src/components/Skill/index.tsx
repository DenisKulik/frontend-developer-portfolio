import React from 'react'
import { SkillWrapper, Title } from './SkillStyles.ts'
import { IconType } from 'react-icons'
import Icon from '../Icon'

type SkillPropsType = {
    title: string
    icon: IconType
    size: string
    color: string
}

const Skill: React.FC<SkillPropsType> = props => {
    const { title, icon, size, color } = props

    return (
        <SkillWrapper>
            <Icon icon={icon} color={color} size={size} />
            <Title>{title}</Title>
        </SkillWrapper>
    )
}

export default Skill
