import { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';
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
        <SkillsWrapper id="skills">
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Skills</Heading>
                    <SkillsInner>
                        <Zoom duration={200} triggerOnce={true} cascade={true}>
                            {skillItems}
                        </Zoom>
                    </SkillsInner>
                </Slide>
            </Container>
        </SkillsWrapper>
    );
};

export default Skills;