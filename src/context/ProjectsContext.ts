import { createContext } from 'react';
import { projects, ProjectType } from '../data/data.ts';

const ProjectsContext = createContext<ProjectType[]>(projects);

export default ProjectsContext;