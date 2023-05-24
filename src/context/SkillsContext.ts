import { createContext } from 'react';
import { skills, SkillType } from '../data/data.ts';

const skillsContext = createContext<SkillType[]>(skills);

export default skillsContext;