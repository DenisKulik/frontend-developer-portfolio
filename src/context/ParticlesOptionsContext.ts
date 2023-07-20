import { createContext } from 'react';
import { particlesOptions } from '../data/data.ts';
import { ISourceOptions } from 'tsparticles-engine';

const ParticlesOptionsContext = createContext<ISourceOptions>(particlesOptions);

export default ParticlesOptionsContext;