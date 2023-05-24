import { useContext } from 'react';
import SkillsContext from '../../context/SkillsContext.ts';
import { SkillsInner, SkillsWrapper } from './SkillsStyles.ts';
import Container from '../Container';
import Heading from '../../components/Heading';
import Skill from '../../components/Skill';

const Skills = () => {
    const skills = useContext(SkillsContext);

    const skillItems = skills.map((skill, idx) => (
        <Skill
            key={idx}
            title={skill.title}
            icon={skill.icon}
            color={skill.color}
            size="10rem"
        />
    ));

    return (
        <SkillsWrapper>
            <Container>
                <Heading>Skills</Heading>
                <SkillsInner>
                    {skillItems}
                </SkillsInner>
            </Container>
        </SkillsWrapper>
    );
};

export default Skills;