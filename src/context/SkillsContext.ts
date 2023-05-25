import { createContext } from 'react';
import { skills, SkillType } from '../data/data.ts';

const SkillsContext = createContext<SkillType[]>(skills);

export default SkillsContext;